import React from "react";
import Table, { alphanumericSorter } from "../Table";
import useFormsData from "../../hooks/useFormsData";

const UserTable = () => {
  const { data, isLoading } = useFormsData("UserForm");

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: alphanumericSorter("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: alphanumericSorter("lastName"),
    },
    {
      title: "Preferred Name",
      dataIndex: "preferredName",
      sorter: alphanumericSorter("preferredName"),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: alphanumericSorter("email"),
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

export default UserTable;
