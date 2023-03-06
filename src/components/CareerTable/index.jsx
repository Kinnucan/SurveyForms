import React from "react";
import Table, { alphanumericSorter } from "../Table";
import useFormsData from "../../hooks/useFormsData";

const CareerTable = () => {
  const { data, isLoading } = useFormsData("CareerForm");
  console.log(data);

  const columns = [
    {
      title: "Job Title",
      dataIndex: "job",
      sorter: alphanumericSorter("job"),
    },
    {
      title: "Years of Experience",
      dataIndex: "YOE",
      sorter: alphanumericSorter("YOE"),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: alphanumericSorter("salary"),
    },
    {
      title: "Job Satisfaction",
      dataIndex: "satisfaction",
      sorter: alphanumericSorter("satisfaction"),
    },
    {
      title: "Employer Rating",
      dataIndex: "rating",
      sorter: alphanumericSorter("rating"),
    },
  ];

  return (
    <Table
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        defaultPageSize: 20,
      }}
      isLoading={isLoading}
      columns={columns}
      rowKey={(record) => record.date}
      dataSource={data}
    />
  );
};

export default CareerTable;
