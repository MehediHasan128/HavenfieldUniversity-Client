import { FieldValues, useForm } from "react-hook-form";
import HForm from "../../components/form/HForm";
import HSelect from "../../components/form/HSelect";
import { useGetAllSemesterQuery } from "../../redux/features/Admin/AcademicManagement/academicSemesterApi";
import { useEffect, useState } from "react";
import { TQueryParams } from "../../types/academicSemester";
import { data } from "react-router-dom";


type TSearch = {
  filterTerm: string;
  value: string;
}


const AdminDashboard = () => {
  const yearOptions = [
    {
      value: "2025",
      label: "2025",
    },
    {
      value: "2026",
      label: "2026",
    },
  ];

  const {control, watch} = useForm();
  const selectedYear = watch("year");
  const [params, setParams] = useState<TSearch[]>([])
  
  useEffect(() => {
    const a = [
      {
        filterTerm: "year",
        value: selectedYear
      }
    ]
    setParams(a)
  }, [selectedYear]);


  const {data: semesterData} = useGetAllSemesterQuery(params);
  console.log(semesterData);






































  const handleLogin = (data: FieldValues) => {
    // console.log(data);
  };

  return (
    <div className="flex justify-center items-center">
      <HForm onSubmit={handleLogin}>
        <div className="space-y-3">
          <div className="flex flex-col">
            <label>Email</label>
            <HSelect
              name="year"
              options={yearOptions}
              placeholder="select year"
              control={control}
            />
          </div>
          <div>
            <button className="bg-blue-500 w-full py-1 rounded text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </HForm>
    </div>
  );
};

export default AdminDashboard;
