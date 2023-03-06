import React from "react";
import { Layout } from "antd";
import NavBar from "../Navbar";
import "./style.css";

const ContentLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Layout>
        <div className="content">{children}</div>
      </Layout>
    </>
  );
};

export default ContentLayout;
