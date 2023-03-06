import React from "react";
import Table, { alphanumericSorter } from "../Table";
import useFormsData from "../../hooks/useFormsData";

const InterestsTable = () => {
  const { data, isLoading, isError, isSuccess } = useFormsData("InterestsForm");

  const columns = [
    {
      title: "Sport",
      dataIndex: "sport",
      sorter: alphanumericSorter("sport"),
    },
    {
      title: "Book",
      dataIndex: "book",
      sorter: alphanumericSorter("book"),
    },
    {
      title: "Hobby",
      dataIndex: "hobby",
      sorter: alphanumericSorter("hobby"),
    },
    {
      title: "Number",
      dataIndex: "number",
      sorter: alphanumericSorter("number"),
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

export default InterestsTable;
