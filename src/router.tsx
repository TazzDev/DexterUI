import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import LoginPage from "./pages/login/index.tsx";

const PROTECTED_ROUTES = ["/dashboard", "/account"];

const DexterRouter: React.FC = () => {
  console.log(PROTECTED_ROUTES);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default DexterRouter;
