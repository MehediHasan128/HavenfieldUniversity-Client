import { Table, TableColumnsType, TableProps } from "antd";
import cover from "../../../assets/images/cover.jpg";
import { TTableDataType } from "../../../types/academicSemester";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/Admin/AcademicManagement/academicDepartmentApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { TAcademicDepartment } from "../../../types/academicDepartment";

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
  const { data: departmentData } = useGetAllAcademicDepartmentQuery("");

  const onChange: TableProps<TTableDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log(filters);
  };

  const tableData = departmentData?.data.map((item: TAcademicDepartment) => ({
    key: item._id,
    departmentName: item.departmentName,
    departmentCode: item.departmentCode,
    academicSchool: item.academicSchool.schoolName
      .replace(/\b(School|of)\b\s*/gi, "")
      .trim(),
  }));

  console.log(departmentData);

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="md:rounded-t-xl h-[300px]"
      />
      {/* Table container */}
      <div className="absolute w-full">
        <Table columns={columns} dataSource={tableData} onChange={onChange} />
      </div>
    </div>
  );
};

export default AcademicDepartment;
