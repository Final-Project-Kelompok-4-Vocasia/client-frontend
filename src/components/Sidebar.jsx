import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogout, AiOutlineMenu, AiOutlineShopping, AiOutlineUser} from 'react-icons/ai';


const Sidebar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isAsideOpen, setAsideOpen] = useState(true);
  const navigate = useNavigate();
 

  const handleDashboard = () => {
    navigate('/home');
  };

  const handleOrder = () => {
    navigate('/history');
  };


  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      {/* Header */}
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button type="button" className="text-3xl" onClick={toggleAside}>
            <AiOutlineMenu/>
          </button>
          <div>Cafètaria</div>
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

      <div className="flex">
        {/* Aside */}
        {isAsideOpen && (
          <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style={{ height: '90.5vh' }}>
            <ul className="pt-2 pb-4 space-y-1 text-sm">
        <li className="hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
          <button className="flex items-center p-2 space-x-3 rounded-md " onClick={handleDashboard}>
            <AiOutlineHome className="w-5 h-6 mr-2"/>
            <span>Dashboard</span>
          </button>
        </li>
        <li className="hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
          <button className="flex items-center p-2 space-x-3 rounded-md">
            <AiOutlineUser className="w-5 h-6 mr-2"/>
            <span>Users</span>
          </button>
        </li>
        <li className="hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
          <button className="flex items-center p-2 space-x-3 rounded-md" onClick={handleOrder}>
            <AiOutlineShopping className="w-5 h-6 mr-2"/>
            <span>History Order</span>
          </button>
        </li>
      </ul>
          </aside>
        )}

        {/* Main Content */}
     
      </div>
    </main>
  );
};

export default Sidebar;
