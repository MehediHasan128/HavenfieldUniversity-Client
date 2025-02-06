import { ReactElement } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const HForm = ({
  onSubmit,
  children,
}: {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactElement;
}) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default HForm;
