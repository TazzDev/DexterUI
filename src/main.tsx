import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import Layout from "./pages/layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0Provider
          domain="dev-35qguy1iybrdzwwq.jp.auth0.com"
          clientId="3sq4fFZc8xvUU7lFNJmG8f21e3949IQP"
          // authorizationParams={{
          //   redirect_uri: `${window.location.origin}/login`,
          // }}
        >
      <Routes>
       
          <Route element={<Layout />}>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/app" Component={App} />
          </Route>
      </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);