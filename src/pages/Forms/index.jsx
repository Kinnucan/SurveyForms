import React from "react";
import { Tabs } from "antd";
import ContentLayout from "../../components/ContentLayout";
import Card from "../../components/Card";
import UserForm from "../../components/UserForm";
import InterestsForm from "../../components/InterestsForm";
import CareerForm from "../../components/CareerForm";
import "./style.css";

const forms = {
  User: <UserForm />,
  Interests: <InterestsForm />,
  Career: <CareerForm />,
};

const FormPage = () => (
  <ContentLayout>
    <Card paddingSize="l" className="forms-card">
      <Tabs
        className="forms-tabs"
        type="card"
        items={Object.entries(forms).map(([key, value]) => ({
          key,
          label: key,
          children: value,
        }))}
      />
    </Card>
  </ContentLayout>
);

export default FormPage;
