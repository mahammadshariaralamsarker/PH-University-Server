// import { Input } from 'antd';
// import { Controller } from 'react-hook-form';

// type TInputProps = {
//   type: string;
//   name: string;
//   label?: string;
// };

// const PHInput = ({ type, name, label }: TInputProps) => {
//   return (
//     <div style={{ marginBottom: '20px' }}>
//       {label ? label : null}
//       <Controller
//         name={name}
//         render={({ field }) => <Input {...field} type={type} id={name} />}
//       />
//     </div>
//   );
// };

// export default PHInput;

import Input from "antd/es/input/Input";
import { Controller  } from "react-hook-form";
type TnputProps = {
  type:string,
  name:string,
  label?:string
}
export default function PHInput({ type, name, label }:TnputProps) {
  return (
    <div style={{marginBottom:'20px'}}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} {...field} id={name} />}
      />
    </div>
  );
}
