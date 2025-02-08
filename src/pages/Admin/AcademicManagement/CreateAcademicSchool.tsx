import { FieldValues } from "react-hook-form";
import HForm from "../../../components/form/HForm";
import HInput from "../../../components/form/HInput";
import cover from "../../../assets/images/cover.jpg";
import { useCreateAcademicSchoolMutation } from "../../../redux/features/Admin/AcademicManagement/academicSchoolApi";
import { toast } from "sonner";

const CreateAcademicSchool = () => {
  const [createAcademicSchool] = useCreateAcademicSchoolMutation();

  const handelCreateAcademicSchool = async (data: FieldValues) => {
    const acaddemicSchoolInfo = {
      schoolName: data?.academicSchool,
      schoolCode: data?.academicSchoolCode,
    };

    const toastId = toast.loading("Creating Academic School");
    try {
      const res = await createAcademicSchool(acaddemicSchoolInfo).unwrap();
      toast.success(res?.message, { id: toastId, duration: 3000 });
    } catch (error) {
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="md:rounded-xl h-[350px]"
      />
      <div className="absolute top-[40%] md:top-[50%] w-full px-3 pb-3 lg:pb-0">
        <div className="bg-white  md:w-[70%] lg:w-[50%] mx-auto p-8 rounded-xl shadow-xl">
          <div>
            <h1 className="text-center font-semibold text-sm md:text-2xl">
              Create Academi School
            </h1>
            <div className="w-[30%] lg:w-[20%] mx-auto mt-1 border-2 lg:border-3 border-blue-500 rounded" />
          </div>
          <div className="lg:w-[70%] mx-auto mt-5 lg:p-5">
            <HForm onSubmit={handelCreateAcademicSchool}>
              <div>
                <HInput
                  type="text"
                  name="academicSchool"
                  label="Academic School"
                  placeholder="Type academic school name"
                  required={true}
                />

                <HInput
                  type="text"
                  name="academicSchoolCode"
                  label="Code"
                  placeholder="Type academic school code"
                  required={true}
                />

                <button className="bg-blue-500 w-full py-2 mt-5 rounded-lg text-md font-semibold text-white cursor-pointer border border-blue-600 hover:bg-transparent hover:text-black hover:border hover:border-blue-600 duration-700">
                  Submit
                </button>
              </div>
            </HForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcademicSchool;
