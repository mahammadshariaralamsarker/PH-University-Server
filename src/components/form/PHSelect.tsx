import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
};

const PHSelect = ({ label, name, options }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: '100% ' }}
            placeholder="Search to Select"
            {...field}
            options={options}
            size="large"
          />
          {error && <small style={{color:'red'}}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;


