import React from "react";

export type TTableDataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  export type TItem = {
    _id: string;
    semesterName: string;
    year: string;
    startMonth: string;
    endMonth: string;
  };

  export type TQueryParams = {
    filterTerm: string;
    value: boolean | React.Key;
  };