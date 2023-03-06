import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Menu } from "antd";
import { FORMS, DASHBOARD } from "../../constants";
import "./style.css";

const { Header } = Layout;

const MenuItems = (logout) => [
  {
    label: (
      <Link className="navbar-link" to={FORMS}>
        Forms
      </Link>
    ),
    key: "FORMS",
  },
  {
    label: (
      <Link className="navbar-link" to={DASHBOARD}>
        Dashboard
      </Link>
    ),
    key: "DASHBOARD",
  },
  {
    label: (
      <Link
        className="navbar-link"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </Link>
    ),
    key: "LOGOUT",
  },
];

const NavBar = () => {
  const { logout } = useAuth0();

  return (
    <Header className="navbar">
      <Menu
        className="navbar-menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={MenuItems(logout)}
      />
    </Header>
  );
};

export default NavBar;
