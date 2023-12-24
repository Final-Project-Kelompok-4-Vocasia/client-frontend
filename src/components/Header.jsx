import React, { useState } from "react";
import logo from "../assets/Cafètaria (3).png";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-amber-800 p-2">
      <div className="flex items-center space-x-2">
        <div className="w-36 pb-1">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div>
        <button type="button" onClick={toggleProfile} className="h-9 w-9 mr-2 overflow-hidden rounded-full">
          <img src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png" alt="admin" />
        </button>

        {isProfileOpen && (
          <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
            <div className="flex flex-col space-y-3 p-2 items-start">
              <button className="transition hover:text-blue-600">
                <AiOutlineUser className="inline-block mr-2" /> My Profile
              </button>
              <button className="transition hover:text-blue-600">
                <AiOutlineLogout className="inline-block mr-2" /> Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
