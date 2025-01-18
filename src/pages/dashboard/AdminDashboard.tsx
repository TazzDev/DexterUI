import React from "react";

export interface AdminDashboardProps {
  schoolName: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ schoolName }) => {
  return <div>{schoolName}</div>;
};

export default AdminDashboard;
