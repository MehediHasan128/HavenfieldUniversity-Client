import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const HInput = ({
  type,
  name,
  label,
  placeholder,
  required
}: {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <>
      <Controller
      name={name}
      render={({ field }) => (
        <Form layout="vertical" size="large">
          <Form.Item label={label} style={{marginBottom: '10px'}} >
          <Input {...field} placeholder={placeholder} type={type} id={name} />
        </Form.Item>
        </Form>
      )}
    />
    </>
  );
};

export default HInput;
