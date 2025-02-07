import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TOptions = {
    value: string;
    label: string;
}

const HSelect = ({
    name,
    label,
    placeholder,
    required,
    options
  }: {
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    options: TOptions[]
  }) => {

  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form layout="vertical" size="large">
            <Form.Item label={label} style={{marginBottom: '10px'}}>
              <Select
                {...field}
                placeholder={placeholder}
                options={options}
                id={name}
              />
            </Form.Item>
          </Form>
        )}
      />
    </>
  );
};

export default HSelect;
