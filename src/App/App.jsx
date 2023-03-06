import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "../pages/Forms";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import store from "../redux/store";

export default function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/forms"
            element={isAuthenticated ? <FormPage /> : <LoginPage />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <DashboardPage /> : <LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
