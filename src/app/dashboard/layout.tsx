import Sidebar from "src/components/sidebar";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: IProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        {/* Main content goes here */}
        <div className="p-4 text-black">
          <h1 className="text-2xl font-semibold">Main Content</h1>

          {children}
        </div>
      </div>
    </div>
  );
}
