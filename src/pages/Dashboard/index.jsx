import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Tabs } from "antd";
import useAdmin from "../../hooks/useAdmin";
import ContentLayout from "../../components/ContentLayout";
import Card from "../../components/Card";
import UserTable from "../../components/UserTable";
import InterestsTable from "../../components/InterestsTable";
import CareerTable from "../../components/CareerTable";
import "./style.css";

const tables = {
  "Users Info": <UserTable />,
  "Users Interests": <InterestsTable />,
  "Users Career Info": <CareerTable />,
};

const DashboardPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { isAdmin, isLoading: isAdminLoading } = useAdmin(user.email);

  return (
    <ContentLayout>
      {isAuthenticated && !isLoading && isAdmin && !isAdminLoading ? (
        <Card paddingSize="l" className="tabs-table-card">
          <Tabs
            className="forms-tabs"
            type="card"
            items={Object.entries(tables).map(([key, value]) => ({
              key,
              label: key,
              children: value,
            }))}
          />
        </Card>
      ) : (
        <Card
          className="unauthorized-card"
          isLoading={isLoading || isAdminLoading}
        >
          <h1 className="unauthorized-title">
            You are not authorized to view this page
          </h1>
          <p>
            Please contact your survey representative to gain administrator
            privileges
          </p>
        </Card>
      )}
    </ContentLayout>
  );
};

export default DashboardPage;
