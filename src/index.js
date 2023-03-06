import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ubwj2dc66hp08axm.us.auth0.com"
    clientId="7nEiUxXbBsresyr637WYTS28sciyUQgx"
    authorizationParams={{
      redirect_uri:
        "https://6405717a1f961b0008f8a558--precious-kangaroo-784609.netlify.app/forms",
    }}
  >
    <App />
  </Auth0Provider>
);
