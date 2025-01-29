import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: 'A-0001',
      password: 'admin12345',
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data:FieldValues) => {
  const toastId =   toast.loading('logging in')
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
  
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      toast.success('logging in',{id:toastId, duration:3000})
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${user.role}/dashboard`)
    } catch (error) {
      toast.error('Something went wrong',{id:toastId, duration:3000})
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register('userId')} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
