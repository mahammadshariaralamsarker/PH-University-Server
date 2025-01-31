import React from "react";
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const PHSelect: React.FC = ({ label, name }) => {
  const handleChange = (value: string) => {
    console.log(`selected Value>> ${value}`);
  };

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: 200 }}
            placeholder="Search to Select"
            {...field}
            options={[
              {
                value: "Not Identified",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;

// import { Form, Select } from 'antd';
// import { Controller } from 'react-hook-form';

// type TPHSelectProps = {
//   label: string;
//   name: string;
//   options: { value: string; label: string; disabled?: boolean }[] | undefined;
//   disabled?: boolean;
//   mode?: 'multiple' | undefined;
// };

// const PHSelect = ({ label, name, options, disabled, mode }: TPHSelectProps) => {
//   return (
//     <Controller
//       name={name}
//       render={({ field, fieldState: { error } }) => (
//         <Form.Item label={label}>
//           <Select
//             mode={mode}
//             style={{ width: '100%' }}
//             {...field}
//             options={options}
//             size="large"
//             disabled={disabled}
//           />
//           {error && <small style={{ color: 'red' }}>{error.message}</small>}
//         </Form.Item>
//       )}
//     />
//   );
// };

// export default PHSelect;
