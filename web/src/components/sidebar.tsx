import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      {/* Sidebar content goes here */}
      <div className="py-4 px-6 border-b">
        <h1 className="text-xl font-semibold">Sidebar</h1>
      </div>
      <nav className="flex-grow">
        <ul className="py-2">
          <li className="pl-4 py-2 hover:bg-gray-200">
            <a href="#" className="text-blue-500">
              Menu Item 1
            </a>
          </li>
          <li className="pl-4 py-2 hover:bg-gray-200">
            <a href="#" className="text-blue-500">
              Menu Item 2
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
