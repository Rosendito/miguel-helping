import React from 'react';
import { FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';
import userAvatar from '../assets/images/user-avatar.jpg';

const TopBar = () => {
  return (
    <div className="border-b-2 border-[#eaecf0] text-black h-24 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <FaBell className="text-2xl" />
        <div className="flex items-center">
          <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
          <span className="ml-2">Nombre de Usuario</span>
        </div>
      </div>
      <button className="flex items-center space-x-2">
        <span>Cerrar Sesión</span>
        <FaSignOutAlt />
      </button>
    </div>
  );
};

export default TopBar;
