import { Input, Table, TableColumnsType, TableProps } from "antd";
import cover from "../../../assets/images/cover.jpg";
import { TTableDataType } from "../../../types/academicSemester";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/Admin/AcademicManagement/academicDepartmentApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import {
  TAcademicDepartment,
  TDepartmentQuery,
} from "../../../types/academicDepartment";
import { IoSearch } from "react-icons/io5";
import { ChangeEvent, useState } from "react";


const columns: TableColumnsType<TTableDataType> = [
    {
      title: "Department Name",
      dataIndex: "departmentName",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Code",
      dataIndex: "departmentCode",
      defaultSortOrder: "descend",
    },
    {
      title: "Academic School",
      dataIndex: "academicSchool",
    },
    {
      title: "Actions",
      dataIndex: "endMonth",
      render: () => (
        <div className="flex justify-start gap-3">
          <button className="bg-transparent px-2 py-2 rounded text-xl flex justify-center items-center text-blue-600 hover:scale-150 duration-500 cursor-pointer">
            <FaRegEdit />
          </button>
          <button className="bg-transparent px-2 py-2 rounded text-xl flex justify-center items-center text-red-600 hover:scale-150 duration-500 cursor-pointer">
            <RiDeleteBin6Line />
          </button>
        </div>
      ),
    },
  ];



const AcademicDepartment = () => {
  const [search, setSearch] = useState<TDepartmentQuery[]>([]);
  const { data: departmentData, isFetching } = useGetAllAcademicDepartmentQuery(search);

  const onChange: TableProps<TTableDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log(filters);
  };

  //   Handel search
  const handelSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch([{ field: "searchTerm", value: e.target.value }]);
  };


  const tableData = departmentData?.data.map((item: TAcademicDepartment) => ({
    key: item._id,
    departmentName: item.departmentName,
    departmentCode: item.departmentCode,
    academicSchool: item.academicSchool.schoolName
      .replace(/\b(School|of)\b\s*/gi, "")
      .trim(),
  }));


  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="md:rounded-t-xl h-[300px] relative"
      >
        {/* Search and filter */}
        <div className="absolute h-full w-full flex justify-center items-center">
          <div className="w-[40%]">
            <Input
              prefix={<IoSearch className="text-xl font-semibold" />}
              placeholder="Search Department"
              size="large"
              onChange={handelSearch}
            />
          </div>
        </div>
      </div>

      {/* Table container */}
      <div className="absolute w-full">
        <Table
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default AcademicDepartment;
