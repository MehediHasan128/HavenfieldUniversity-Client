import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TOptions = {
  value: string;
  label: string;
};

const HSelect = ({
  name,
  label,
  placeholder,
  required,
  options,
  control
}: {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options: TOptions[];
  control?: any;
}) => {
  return (
    <>
      <Controller
      control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form layout="vertical" size="large">
            <Form.Item
              label={label}
              style={{ marginBottom: "10px" }}
              required={required}
            >
              <Select
                {...field}
                showSearch
                placeholder={placeholder}
                optionFilterProp="label"
                options={options}
                id={name}
                onChange={(value) => {
                  field.onChange(value)
                }}
              />
              {error && (
                <>
                  <small className="text-red-600">{error.message}</small>
                </>
              )}
            </Form.Item>
          </Form>
        )}
      />
    </>
  );
};

export default HSelect;
