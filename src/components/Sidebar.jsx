import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineFile, AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard/seller");
  };

  const handleOrder = () => {
    navigate("/history");
  };

  const handleAdd = () => {
    navigate("/add-menu");
  };

  const handleUsers = () => {
    navigate("/view-users");
  };

  return (
    <div className="flex">
      <aside className="flex h-full w-60 space-y-2 border-r-2 border-gray-200 bg-orange-400 p-5 overflow-y-auto">
        <ul className="pt-2 pb-4 space-y-1 text-base">
          <li className="w-48 hover:bg-orange-700 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <button className="flex items-center p-2 space-x-3 rounded-md " onClick={handleDashboard}>
              <AiOutlineHome className="w-5 h-6 mr-2" />
              <span>Dashboard</span>
            </button>
          </li>
          <li className="w-48 hover:bg-orange-700 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <button className="flex items-center p-2 space-x-3 rounded-md" onClick={handleUsers}>
              <AiOutlineUser className="w-5 h-6 mr-2" />
              <span>Users</span>
            </button>
          </li>
          <li className="w-48 hover:bg-orange-700 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <button className="flex items-center p-2 space-x-3 rounded-md" onClick={handleAdd}>
              <AiOutlineFile className="w-5 h-6 mr-2" />
              <span>Add Menu</span>
            </button>
          </li>
          <li className="w-48 hover:bg-orange-700 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
            <button className="flex items-center p-2 space-x-3 rounded-md" onClick={handleOrder}>
              <AiOutlineShopping className="w-5 h-6 mr-2" />
              <span>History Order</span>
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
