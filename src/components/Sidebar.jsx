import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout, AiOutlineMenu, AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

const Sidebar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isAsideOpen, setAsideOpen] = useState(true);
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/home");
  };

  const handleOrder = () => {
    navigate("/history");
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

  return (
    <div className="flex">
      {/* Aside */}
      {isAsideOpen && (
        <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style={{ height: "90.5vh" }}>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
              <button className="flex items-center p-2 space-x-3 rounded-md " onClick={handleDashboard}>
                <AiOutlineHome className="w-5 h-6 mr-2" />
                <span>Dashboard</span>
              </button>
            </li>
            <li className="hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
              <button className="flex items-center p-2 space-x-3 rounded-md">
                <AiOutlineUser className="w-5 h-6 mr-2" />
                <span>Users</span>
              </button>
            </li>
            <li className="hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
              <button className="flex items-center p-2 space-x-3 rounded-md" onClick={handleOrder}>
                <AiOutlineShopping className="w-5 h-6 mr-2" />
                <span>History Order</span>
              </button>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
