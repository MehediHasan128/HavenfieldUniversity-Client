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
        render={({ field, fieldState: {error} }) => (
          <Form layout="vertical" size="large">
            <Form.Item label={label} style={{marginBottom: '10px'}}>
              <Select
                {...field}
                placeholder={placeholder}
                options={options}
                id={name}
              />
              {error && <><small className="text-red-600">{error.message}</small></>}
            </Form.Item>
          </Form>
        )}
      />
    </>
  );
};

export default HSelect;
