import { FieldValues, useForm } from "react-hook-form";
import HForm from "../../../components/form/HForm";
import { Button, Divider, UploadFile } from "antd";
import HInput from "../../../components/form/HInput";
import HDatePicker from "../../../components/form/HDatePicker";
import HSelect from "../../../components/form/HSelect";
import { useEffect, useState } from "react";
import { TQueryParams } from "../../../types/academicSemester";
import { useGetAllSemesterQuery } from "../../../redux/features/Admin/AcademicManagement/academicSemesterApi";
import { generateSelectOptions } from "../../../utils/generateSelectOptions";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/Admin/AcademicManagement/academicDepartmentApi";
import HUploads from "../../../components/form/HUploads";
import { useCreateStudentMutation } from "../../../redux/features/Registrar/UserManagement/studentApi";
import { toast } from "sonner";
import { yearOptions } from "../../../constant/semester";
import { useGetAllAcademicSchoolQuery } from "../../../redux/features/Admin/AcademicManagement/academicSchoolApi";
import { bloodGrtoupOptions, genderOptions } from "../../../global";

const CreateStudent = () => {
  const { control, watch } = useForm();
  const selectedYear = watch("year");
  const selectedSchool = watch("academicSchool");
  const [params, setParams] = useState<TQueryParams[] | undefined>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);

  // Use useEffect hook for featching academic semester
  useEffect(() => {
    setParams([{ filterTerm: "year", value: selectedYear }]);
  }, [selectedYear]);
  // Use useEffect hook for featching academic department
  useEffect(() => {
    setParams([{ filterTerm: "academicSchool", value: selectedSchool }]);
  }, [selectedSchool]);

  // Get semester data
  const { data: semesterData } = useGetAllSemesterQuery(params);
  // Create semester data options
  const semesterOptions = generateSelectOptions(semesterData, "semesterName");
  // get academic school
  const { data: academicSchool } = useGetAllAcademicSchoolQuery(undefined);
  // Create academic school options
  const academicSchoolOptions = generateSelectOptions(
    academicSchool,
    "schoolName"
  );
  // Get academic department data
  const { data: departmentData } = useGetAllAcademicDepartmentQuery(params);
  // Create academic school options
  const academicDepartmentOptions = generateSelectOptions(
    departmentData,
    "departmentName"
  );

  const [createStudent] = useCreateStudentMutation();

  const handelCreateStudent = async (data: FieldValues) => {
    const studentInfo = {
      userName: data?.userName,
      email: data?.email,
      gender: data?.gender,
      dateOfBirth: data?.dateOfBirth,
      contactNumber: data?.contactNumber,
      emergencyContactNumber: data?.emergencyContactNumber,
      bloodGroup: data?.bloodGroup,
      presentAddress: data?.presentAddress,
      permanentAddress: data?.permanentAddress,
      guardian: data?.guardian,
      localGuardian: data?.localGuardian,
      sscRoll: data?.sscRoll,
      sscResult: Number(data?.sscResult),
      hscRoll: data?.hscRoll,
      hscResult: Number(data?.hscResult),
      addmissionSemester: data?.addmissionSemester,
      academicDepartment: data?.academicDepartment,
    };

    const studentData = {
      student: studentInfo,
    };
    const imageFiels = uploadedFiles[0]?.originFileObj;

    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    if (imageFiels) {
      formData.append("file", imageFiels);
    }
    const toastId = toast.loading("Creating Student");

    try {
      const res = await createStudent(formData).unwrap();
      toast.success(res?.message, { id: toastId, duration: 3000 });
    } catch (error) {
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className="w-[100%]">
      <div className="bg-white p-6 lg:rounded-2xl shadow">
        <HForm onSubmit={handelCreateStudent}>
          <div>
            <div>
              <HUploads onFileChange={setUploadedFiles} />
            </div>
            <Divider orientation="left">
              <span className="text-blue-600">Personal Information</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-3">
              <HInput
                type="text"
                label="First Name"
                name="userName.firstName"
                placeholder="Enter student first name"
                required={true}
              />
              <HInput
                type="text"
                label="Last Name"
                name="userName.lastName"
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
              <HDatePicker
                name="dateOfBirth"
                label="Date of birth"
                required={true}
              />
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h1 className="text-lg font-semibold my-3">
                  1. Present Address
                </h1>
                <div className="grid md:grid-cols-2 gap-3">
                  <HInput
                    type="text"
                    label="Street"
                    name="presentAddress.street"
                    placeholder="Enter street"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="City"
                    name="presentAddress.city"
                    placeholder="Enter city"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="State"
                    name="presentAddress.state"
                    placeholder="Enter state"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="Postal Code"
                    name="presentAddress.postalCode"
                    placeholder="Enter postalCode"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="Country"
                    name="presentAddress.country"
                    placeholder="Enter country"
                    required={true}
                  />
                </div>
              </div>

              <div>
                <h1 className="text-lg font-semibold my-3">
                  2. Permanent Address
                </h1>
                <div className="grid md:grid-cols-2 gap-3">
                  <HInput
                    type="text"
                    label="Street"
                    name="permanentAddress.street"
                    placeholder="Enter street"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="City"
                    name="permanentAddress.city"
                    placeholder="Enter city"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="State"
                    name="permanentAddress.state"
                    placeholder="Enter state"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="Postal Code"
                    name="permanentAddress.postalCode"
                    placeholder="Enter postalCode"
                    required={true}
                  />
                  <HInput
                    type="text"
                    label="Country"
                    name="permanentAddress.country"
                    placeholder="Enter country"
                    required={true}
                  />
                </div>
              </div>
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
            <h1 className="text-lg font-semibold my-3">Local Guardian</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <HInput
                type="text"
                label="Name"
                name="localGuardian.name"
                placeholder="Enter name"
              />
              <HInput
                type="text"
                label="Occupation"
                name="localGuardian.occupation"
                placeholder="Enter occupation"
              />
              <HInput
                type="text"
                label="Contact num"
                name="localGuardian.contactNumber"
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
              />
              <HSelect
                name="academicSchool"
                label="Academic School"
                placeholder="Select academic school"
                options={academicSchoolOptions}
                control={control}
              />
              <HSelect
                name="academicDepartment"
                label="Academic Department"
                placeholder="Select academic department"
                options={academicDepartmentOptions}
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