import { ReactElement } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
};

const HForm = ({
  onSubmit,
  children,
  resolver,
}: {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactElement;
} & TFormConfig) => {
  const formConfig: TFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);

  const handelFromSubmit = (data: FieldValues) => {
    onSubmit(data)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handelFromSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default HForm;
