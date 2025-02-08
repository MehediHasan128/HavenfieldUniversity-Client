import { toast } from "sonner";
import cover from "../../../assets/images/cover.jpg";
import HForm from "../../../components/form/HForm";
import { FieldValues } from "react-hook-form";
import HSelect from "../../../components/form/HSelect";
import {
  monthsOptions,
  semesterOptions,
  yearOptions,
} from "../../../constant/semester";
import {zodResolver} from '@hookform/resolvers/zod';
import { academicSemesterSchema } from "../../../validation/academicSemesterValidationSchema";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/Admin/AcademicManagement/academicSemesterApi";

const CreateAcademicSemester = () => {

    const [createAcademicSemester, {isLoading}] = useCreateAcademicSemesterMutation()

  const handelCreateAcademicSemester = async (data: FieldValues) => {
    const semesterData = {
      semesterName: semesterOptions[Number(data.semesterCode) - 1].label,
      semesterCode: data?.semesterCode,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };

    const toastId = toast.loading("Creating Academic Semester");
    try{
      const res = await createAcademicSemester(semesterData).unwrap();
      console.log(res);
      toast.success(res?.message, { id: toastId, duration: 2000 });
    }catch(error){
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  console.log(isLoading);







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
            <h1 className="text-center font-semibold text-sm md:text-2xl">
              Create Academi Semester
            </h1>
            <div className="w-[30%] lg:w-[20%] mx-auto mt-1 border-2 lg:border-3 border-blue-500 rounded" />
          </div>

          {/* Form */}
          <div className="lg:w-[80%] mx-auto mt-5 lg:p-5">
            <HForm onSubmit={handelCreateAcademicSemester} resolver={zodResolver(academicSemesterSchema)}>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                  <HSelect
                    name="semesterCode"
                    label="Semester Name"
                    placeholder="Select semester name"
                    options={semesterOptions}
                  />
                  <HSelect
                    name="year"
                    label="Year"
                    placeholder="Select year"
                    options={yearOptions}
                  />
                </div>
                <HSelect
                  name="startMonth"
                  label="Start Month"
                  placeholder="Select start month"
                  options={monthsOptions}
                />
                <HSelect
                  name="endMonth"
                  label="End Month"
                  placeholder="Select end month"
                  options={monthsOptions}
                />
                {/* Submit button */}
                <button className="bg-blue-500 w-full py-2 mt-5 rounded-lg text-md font-semibold text-white cursor-pointer border border-blue-600 hover:bg-transparent hover:text-black hover:border hover:border-blue-600 duration-700">
                  Add Semester
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
