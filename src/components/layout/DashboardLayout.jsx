import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";

const DashboardLayout = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
