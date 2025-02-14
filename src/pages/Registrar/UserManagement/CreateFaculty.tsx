import { FieldValues } from "react-hook-form";
import HForm from "../../../components/form/HForm";
import HUploads from "../../../components/form/HUploads";
import { useState } from "react";
import { Button, Divider, UploadFile } from "antd";
import HInput from "../../../components/form/HInput";
import { bloodGrtoupOptions, genderOptions } from "../../../global";
import HSelect from "../../../components/form/HSelect";
import HDatePicker from "../../../components/form/HDatePicker";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/Admin/AcademicManagement/academicDepartmentApi";
import { generateSelectOptions } from "../../../utils/generateSelectOptions";
import { toast } from "sonner";
import { useCreateFacultyMutation } from "../../../redux/features/Registrar/UserManagement/facultyApi";

export const facultyDesignationOptions = [
  { value: "Chancellor", label: "Chancellor" },
  { value: "Dean", label: "Dean" },
  { value: "Department Head", label: "Department Head" },
  { value: "Professor", label: "Professor" },
  { value: "Associate Professor", label: "Associate Professor" },
  { value: "Assistant Professor", label: "Assistant Professor" },
  { value: "Lecturer", label: "Lecturer" },
  { value: "Research Assistant", label: "Research Assistant" },
  { value: "Lab Assistant", label: "Lab Assistant" },
];

const CreateFaculty = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);
  const { data: departmentdata } = useGetAllAcademicDepartmentQuery(undefined);
  const departmentOptions = generateSelectOptions(
    departmentdata,
    "departmentName"
  );

  const [createFaculty, {data, error}] = useCreateFacultyMutation();

  const handleCreateFaculty = async(data: FieldValues) => {
    const facultyInfo = {
      userName: data?.userName,
      email: data?.email,
      gender: data?.gender,
      dateOfBirth: data?.dateOfBirth,
      contactNumber: data?.contactNumber,
      bloodGroup: data?.bloodGroup,
      designation: data?.designation,
      joiningDate: data?.joiningDate,
      academicDepartment: data?.academicDepartment,
      presentAddress: data?.presentAddress,
      permanentAddress: data?.permanentAddress,
      educationalBackground: data?.educationalBackground,
      professionalExperience: data?.professionalExperience,
      skillsAndCertifications: [data?.skillsAndCertifications],
      sampleWorkPortfolio: data?.sampleWorkPortfolio,
      awardsAndAchievements: [data?.awardsAndAchievements],
      recommendationLetters: data?.recommendationLetters,
      reference: data?.reference,
    };
    const facultyData = {
      faculty: facultyInfo
    };

    const imageFiels = uploadedFiles[0]?.originFileObj;

    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    if(imageFiels){
      formData.append("file", imageFiels);
    }

    const toastId = toast.loading("Creating faculty");

    try {
      const res = await createFaculty(formData).unwrap();
      toast.success(res?.message, { id: toastId, duration: 3000 });
    } catch (error) {
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  console.log("data => ", data);
  console.log("error => ", error);

  return (
    <div className="w-full">
      <div className="bg-white p-6 lg:rounded-2xl shadow">
        <HForm onSubmit={handleCreateFaculty}>
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
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
              <HInput
                type="text"
                label="Contact number"
                name="contactNumber"
                placeholder="Contact number"
                required={true}
              />
              <HSelect
                name="bloodGroup"
                label="Blood Group"
                options={bloodGrtoupOptions}
                placeholder="Select blood group"
              />
              <HSelect
                name="designation"
                label="Designation"
                options={facultyDesignationOptions}
                placeholder="Select faculty designation"
                required={true}
              />
              <HDatePicker
                name="joiningDate"
                label="Joining Date"
                required={true}
              />
              <HSelect
                name="academicDepartment"
                label="Department"
                options={departmentOptions}
                placeholder="Select academic department"
                required={true}
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Address Information</span>
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
              <span className="text-blue-600">Educational Background</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <HInput
                type="text"
                label="Degree"
                name={`educationalBackground.0.degree`}
                placeholder="Enter degree"
                required={true}
              />
              <HInput
                type="text"
                label="University/Institution"
                name={`educationalBackground.0.university`}
                placeholder="Enter university"
                required={true}
              />
              <HInput
                type="text"
                label="Year Of Graduation"
                name={`educationalBackground.0.yearOfGraduation`}
                placeholder="Enter graduation year"
                required={true}
              />
              <HInput
                type="text"
                label="Specialization"
                name={`educationalBackground.0.specialization`}
                placeholder="Enter specialization"
                required={true}
              />
              <HInput
                type="text"
                label="Degree"
                name={`educationalBackground.1.degree`}
                placeholder="Enter degree"
                required={true}
              />
              <HInput
                type="text"
                label="University/Institution"
                name={`educationalBackground.1.university`}
                placeholder="Enter university"
                required={true}
              />
              <HInput
                type="text"
                label="Year Of Graduation"
                name={`educationalBackground.1.yearOfGraduation`}
                placeholder="Enter graduation year"
                required={true}
              />
              <HInput
                type="text"
                label="Specialization"
                name={`educationalBackground.1.specialization`}
                placeholder="Enter specialization"
                required={true}
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">
                Certifications And Achievements
              </span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <HInput
                type="text"
                label="Skills And Certification"
                name="skillsAndCertifications"
                placeholder="Enter skills and certificate"
              />
              <HInput
                type="text"
                label="Awards And Achievements"
                name="awardsAndAchievements"
                placeholder="Enter awards and achievements"
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Professional Experience</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <HInput
                type="text"
                label="Role"
                name={`professionalExperience.0.role`}
                placeholder="Enter role"
              />
              <HInput
                type="text"
                label="Institution"
                name={`professionalExperience.0.institution`}
                placeholder="Enter institution"
              />
              <HInput
                type="text"
                label="Duration"
                name={`professionalExperience.0.duration`}
                placeholder="Enter working duration"
              />
              <HInput
                type="text"
                label="Responsibilities"
                name={`professionalExperience.0.responsibilities`}
                placeholder="Enter responsibilities"
              />
              <HInput
                type="text"
                label="Role"
                name={`professionalExperience.1.role`}
                placeholder="Enter role"
              />
              <HInput
                type="text"
                label="Institution"
                name={`professionalExperience.1.institution`}
                placeholder="Enter institution"
              />
              <HInput
                type="text"
                label="Duration"
                name={`professionalExperience.1.duration`}
                placeholder="Enter working duration"
              />
              <HInput
                type="text"
                label="Responsibilities"
                name={`professionalExperience.1.responsibilities`}
                placeholder="Enter responsibilities"
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Recommendation Letter</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <HInput
                type="text"
                label="Name"
                name={`recommendationLetters.0.name`}
                placeholder="Enter name"
              />
              <HInput
                type="text"
                label="Designation"
                name={`recommendationLetters.0.designation`}
                placeholder="Enter designation"
              />
              <HInput
                type="text"
                label="Institution"
                name={`recommendationLetters.0.institution`}
                placeholder="Enter institution"
              />
              <HInput
                type="text"
                label="Email"
                name={`recommendationLetters.0.contactEmail`}
                placeholder="Enter contact email"
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Reference</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <HInput
                type="text"
                label="Name"
                name="reference.name"
                placeholder="Enter name"
              />
              <HInput
                type="text"
                label="Designation"
                name="reference.designation"
                placeholder="Enter designation"
              />
              <HInput
                type="text"
                label="Institution"
                name="reference.institution"
                placeholder="Enter institution"
              />
              <HInput
                type="email"
                label="Email"
                name="reference.email"
                placeholder="Enter contact email"
              />
              <HInput
                type="text"
                label="Number"
                name="reference.contactNumber"
                placeholder="Enter contact number"
              />
            </div>

            <Divider orientation="left">
              <span className="text-blue-600">Sample Work Portfolio</span>
            </Divider>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <HInput
                type="text"
                label="Type"
                name={`sampleWorkPortfolio.0.type`}
                placeholder="Work type"
              />
              <HInput
                type="text"
                label="URL"
                name={`sampleWorkPortfolio.0.url`}
                placeholder="Enter sample url"
              />
            </div>

            <div className="mt-5">
              <Button htmlType="submit">Add Faculty</Button>
            </div>
          </div>
        </HForm>
      </div>
    </div>
  );
};

export default CreateFaculty;