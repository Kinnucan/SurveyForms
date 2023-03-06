import React from "react";
import { Layout, Menu, Button } from "antd";
import Card from "../../components/Card";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const { Header } = Layout;

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" />
      </Header>
      <Layout className="login-content">
        <Card paddingSize="l" className="login-card">
          <h1 className="title">
            Welcome! Please login with Google to access survey forms
          </h1>
          <Button
            type="primary"
            className="login-button"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        </Card>
      </Layout>
    </>
  );
};

export default LoginPage;
