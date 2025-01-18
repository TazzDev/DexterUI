import React from "react";

export type ViewLevel = "ADMIN" | "STAFF";

export interface DashboardProps {
  viewLevel: ViewLevel;
}

const Dashboard: React.FC<DashboardProps> = ({ viewLevel }) => {
  console.log("viewLevel:", viewLevel);
  return <div>DexterDashboard</div>;
};

export default Dashboard;
