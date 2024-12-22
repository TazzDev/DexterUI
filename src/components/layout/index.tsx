"use client";
import DashboardHeader from "../dashboard-header";

const Layout = ({ children }: any) => {
  return (
    <>
      <DashboardHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
