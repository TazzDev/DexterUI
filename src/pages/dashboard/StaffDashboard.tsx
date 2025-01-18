import React from 'react';

export interface StaffDashboardProps {
    schoolName: string;
    permissions: any;
}

const StaffDashboard: React.FC<StaffDashboardProps> = () => {
  return (
    <div>StaffDashboard</div>
  )
}

export default StaffDashboard