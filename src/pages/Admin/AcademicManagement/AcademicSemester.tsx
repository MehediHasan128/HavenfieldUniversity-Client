import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import cover from "../../../assets/images/cover.jpg";
import { useGetAllSemesterQuery } from "../../../redux/features/Admin/AcademicManagement/academicSemesterApi";
import { TItem, TTableDataType } from "../../../types/academicSemester";



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
    ]
  },
  {
    title: "Year",
    dataIndex: "year",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
  },
];

const onChange: TableProps<TTableDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemesterQuery([{filterTerm: 'year', value: '2025'}]);

  const tableData = semesterData?.data.map((item: TItem) => ({
    key: item._id,
    name: item.semesterName,
    year: item.year,
    startMonth: item.startMonth,
    endMonth: item.endMonth,
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
      <div className="absolute w-full">
        <Table<TTableDataType>
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
};

export default AcademicSemester;
