import React from "react";

export type TAcademicDepartment = {
  _id: string;
  departmentName: string;
  departmentCode: string;
  academicSchool: {
    schoolName: string;
  };
};