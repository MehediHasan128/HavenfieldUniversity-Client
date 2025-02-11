import { FieldValues, useForm } from "react-hook-form";
import HForm from "../../../components/form/HForm";
import { Button, Divider } from "antd";
import HInput from "../../../components/form/HInput";
import HDatePicker from "../../../components/form/HDatePicker";
import HSelect from "../../../components/form/HSelect";
import { yearOptions } from "../../../constant/semester";
import { useEffect, useState } from "react";
import { TQueryParams } from "../../../types/academicSemester";
import { useGetAllSemesterQuery } from "../../../redux/features/Admin/AcademicManagement/academicSemesterApi";
import { generateSelectOptions } from "../../../utils/generateSelectOptions";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const bloodGrtoupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];

const CreateStudent = () => {
  const { control, watch } = useForm();
  const selectedYear = watch("year");
  const [params, setParams] = useState<TQueryParams[] | undefined>([]);
  useEffect(() => {
    setParams([{ filterTerm: "year", value: selectedYear }]);
  }, [selectedYear]);
  const { data: semesterData } = useGetAllSemesterQuery(params);
  const semesterOptions = generateSelectOptions(semesterData, "semesterName");

  const handelCreateStudent = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="w-[100%]">
      <div className="bg-white p-6 lg:rounded-2xl shadow">
        <HForm onSubmit={handelCreateStudent}>
          <div>
            <Divider orientation="left">
              <span className="text-blue-600">Personal Information</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
              <HInput
                type="text"
                label="First Name"
                name="name.firstName"
                placeholder="Enter student first name"
                required={true}
              />
              <HInput
                type="text"
                label="Middle Name"
                name="name.middleName"
                placeholder="Enter student middle name"
              />
              <HInput
                type="text"
                label="Last Name"
                name="name.lstName"
                placeholder="Enter student last name"
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
              <HInput
                type="email"
                label="Email"
                name="email"
                placeholder="Enter student email"
                required={true}
              />
              <HSelect
                name="gender"
                label="Gender"
                options={genderOptions}
                placeholder="Select gender"
                required={true}
              />
              <HDatePicker name="date" label="Date of birth" required={true} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
              <HInput
                type="text"
                label="Contact number"
                name="contactNumber"
                placeholder="Contact number"
                required={true}
              />
              <HInput
                type="text"
                label="Emergency number"
                name="emergencyContactNumber"
                placeholder="Emergency contact number"
                required={true}
              />
              <HSelect
                name="bloodGroup"
                label="Blood Group"
                options={bloodGrtoupOptions}
                placeholder="Select blood group"
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Address</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <HInput
                type="text"
                label="Present Address"
                name="presentAddress"
                placeholder="Enter student present address"
                required={true}
              />
              <HInput
                type="text"
                label="Permanent Address"
                name="permanentAddress"
                placeholder="Enter student permanent address"
                required={true}
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Guardian Information</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <HInput
                type="text"
                label="Father name"
                name="guardian.fatherName"
                placeholder="Enter student father name"
              />
              <HInput
                type="text"
                label="Father occupation"
                name="guardian.fatherOccupation"
                placeholder="Enter student father occupation"
              />
              <HInput
                type="text"
                label="Father contact num"
                name="guardian.fatherContactNumber"
                placeholder="Enter student father contact number"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <HInput
                type="text"
                label="Mother name"
                name="guardian.motherName"
                placeholder="Enter student mother name"
              />
              <HInput
                type="text"
                label="Mother occupation"
                name="guardian.motherOccupation"
                placeholder="Enter student mother occupation"
              />
              <HInput
                type="text"
                label="Mother contact num"
                name="guardian.motherContactNumber"
                placeholder="Enter student mother contact number"
              />
            </div>
            <h1 className="text-lg font-bold my-3">Local Guardian</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <HInput
                type="text"
                label="Name"
                name="guardian.name"
                placeholder="Enter name"
              />
              <HInput
                type="text"
                label="Occupation"
                name="guardian.occupation"
                placeholder="Enter occupation"
              />
              <HInput
                type="text"
                label="Contact num"
                name="guardian.contactNumber"
                placeholder="Enter contact number"
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Academic Information</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <HInput
                type="text"
                label="SSC Roll"
                name="sscRoll"
                placeholder="Enter ssc roll"
                required={true}
              />
              <HInput
                type="text"
                label="SSC Result"
                name="sscResult"
                placeholder="Enter ssc result"
                required={true}
              />
              <HInput
                type="text"
                label="HSC Roll"
                name="hscRoll"
                placeholder="Enter hsc roll"
                required={true}
              />
              <HInput
                type="text"
                label="HSC Result"
                name="hscResult"
                placeholder="Enter hsc result"
                required={true}
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Addmission Information</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <HSelect
                name="year"
                label="Year"
                placeholder="Select year"
                options={yearOptions}
                control={control}
              />
              <HSelect
                name="addmissionSemester"
                label="Addmission Semester"
                placeholder="Select addmission semester"
                options={semesterOptions}
                control={control}
              />
              <HInput
                type="text"
                label="Academic School"
                name="academicSchool"
                placeholder="Select academic school"
              />
              <HInput
                type="text"
                label="Academic Department"
                name="academicDepartment"
                placeholder="Select academic department"
              />
            </div>

            <Button htmlType="submit">Add Student</Button>
          </div>
        </HForm>
      </div>
    </div>
  );
};

export default CreateStudent;
