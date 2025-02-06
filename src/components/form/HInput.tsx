import { Input } from "antd";
import { Controller } from "react-hook-form";

const HInput = ({type, name, placeholder}: {type: string; name: string; placeholder?: string}) => {

  return (
    <Controller name={name} render={({field}) => (
        <Input {...field} placeholder={placeholder} type={type} id={name} />
    )} />
  );
};

export default HInput;
