import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import cover from "../../../assets/images/cover.jpg";
import { useGetAllSemesterQuery } from "../../../redux/features/Admin/AcademicManagement/academicSemesterApi";
import {
  TItem,
  TQueryParams,
  TTableDataType,
} from "../../../types/academicSemester";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import OpenModal from "../../../components/ui/modal";



const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: semesterData, isFetching } = useGetAllSemesterQuery(params);
  const [openResponsive, setOpenResponsive] = useState(false);


  // Table colum
const columns: TableColumnsType<TTableDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Spring",
        value: "Spring",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Semester Duration",
    dataIndex: "semesterDuration",
  },
  {
    title: "Status",
    dataIndex: "addmissionStatus",
    filters: [
      {
        text: "open",
        value: "Open",
      },
      {
        text: "close",
        value: "Close",
      },
    ],
  },
  {
    title: "Actions",
    dataIndex: "endMonth",
    render: () => (
      <div className="flex justify-start gap-3">
        <button className="bg-transparent px-2 py-2 rounded text-xl flex justify-center items-center text-blue-600 hover:scale-150 duration-500 cursor-pointer">
          <OpenModal btnText={<FaRegEdit />} />
        </button>
        <button className="bg-transparent px-2 py-2 rounded text-xl flex justify-center items-center text-red-600 hover:scale-150 duration-500 cursor-pointer">
          <RiDeleteBin6Line />
        </button>
      </div>
    ),
  },
];


  // Habdel filter sort
  const onChange: TableProps<TTableDataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters.name?.forEach((item) => {
        queryParams.push({
          filterTerm: "semesterName",
          value: item,
        });
      });

      setParams(queryParams);
    }
  };

  // Find out table data
  const tableData = semesterData?.data.map((item: TItem) => ({
    key: item._id,
    name: item.semesterName,
    year: item.year,
    semesterDuration: `${item.startMonth} - ${item.endMonth}`,
    addmissionStatus: (
      <div>
        {item.addmissionStatus === "open" ? (
          <>
            <h1 className="bg-green-400 w-fit px-3 py-1 rounded-lg font-semibold text-white">
              {item.addmissionStatus}
            </h1>
          </>
        ) : (
          <>
            <h1 className="bg-red-400 w-fit px-3 py-1 rounded-lg font-semibold text-white">
              {item.addmissionStatus}
            </h1>
          </>
        )}
      </div>
    ),
  }));

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

export default AcademicSemester;
