import Sidebar from "src/components/sidebar";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function WidgetDashboardLayout({ children }: IProps) {
  return (
    <div>
      <div className={"w-full bg-blue-500 h-[80px]"}>
        {" "}
        I am from grouped routes.
      </div>
      {children}
    </div>
  );
}
