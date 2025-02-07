import { toast } from "sonner";
import cover from "../../../assets/images/cover.jpg";
import HForm from "../../../components/form/HForm";
import { FieldValues } from "react-hook-form";
import HSelect from "../../../components/form/HSelect";

const options = [
  { value: "01", label: "Spring" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const CreateAcademicSemester = () => {
  const handelCreateAcademicSemester = async (data: FieldValues) => {
    console.log(data);

    // const toastId = toast.loading("Creating Academic School");
    // try{
    //   const res = await .unwrap();
    //   toast.success(res?.message, { id: toastId, duration: 2000 });
    // }catch(error){
    //   toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    // }
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
        {/* Form Container */}
        <div className="bg-white  md:w-[70%] lg:w-[50%] mx-auto p-8 rounded-xl shadow-xl">
          {/* From headline */}
          <div>
            <h1 className="text-center font-semibold text-xl md:text-2xl">
              Create Academi Semester
            </h1>
            <div className="w-[30%] lg:w-[20%] mx-auto mt-1 border-3 border-blue-500 rounded" />
          </div>

          {/* Form */}
          <div className="lg:w-[70%] mx-auto mt-5 lg:p-5">
            <HForm onSubmit={handelCreateAcademicSemester}>
              <div>
                <HSelect
                  name="code"
                  label="Semester Name"
                  placeholder="Select semester name"
                  options={options}
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

export default CreateAcademicSemester;
