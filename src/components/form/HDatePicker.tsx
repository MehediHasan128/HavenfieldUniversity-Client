import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const HDatePicker = ({
  name,
  label,
  required
}: {
  name: string;
  label?: string;
  required?: boolean;
}) => {
  return (
    <>
      <Controller
      name={name}
      render={({ field }) => (
        <Form layout="vertical" size="large">
          <Form.Item label={label} style={{marginBottom: '8px'}} required={required}>
          <DatePicker{...field} id={name} style={{width: '100%'}} />
        </Form.Item>
        </Form>
      )}
    />
    </>
  );
};

export default HDatePicker;