import React, { useState } from 'react';
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaExchangeAlt, FaAddressBook, FaLock } from 'react-icons/fa';
import logo from "../assets/images/logo-blanco.png";

const SideBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };

  return (
    <div className="bg-ternary-color text-white h-screen w-80 flex flex-col">
      <div className="p-4 text-center border-b-2 border-primary-color">
        <img src={logo} width={250} height={250} alt="Logo" />
      </div>
      <div className="flex-1">
        <ul className="p-4">
          <li className={`mb-2 p-2 py-4 flex items-center ${currentPage === 'dashboard' ? 'bg-primary-color' : ''}`}>
            <LinkRouter to="/dashboard" onClick={() => handleLinkClick('/')} className="flex items-center w-full">
              <FaHome className="mr-2" /> Dashboard
            </LinkRouter>
          </li>
          <li className={`mb-2 p-2 py-4 flex items-center ${currentPage === 'Mi Cuenta' ? 'bg-primary-color' : ''}`}>
            <LinkRouter to="/mi-cuenta" onClick={() => handleLinkClick('Mi Cuenta')} className="flex items-center w-full">
              <FaUser className="mr-2" /> Mi Cuenta
            </LinkRouter>
          </li>
          <li className={`mb-2 p-2 py-4 flex items-center ${currentPage === 'Transferencias' ? 'bg-primary-color' : ''}`}>
            <LinkRouter to="/transferencias" onClick={() => handleLinkClick('Transferencias')} className="flex items-center w-full">
              <FaExchangeAlt className="mr-2" /> Transferencias
            </LinkRouter>
          </li>
          <li className={`mb-2 p-2 py-4 flex items-center ${currentPage === 'Directorio' ? 'bg-primary-color' : ''}`}>
            <LinkRouter to="/directorio" onClick={() => handleLinkClick('Directorio')} className="flex items-center w-full">
              <FaAddressBook className="mr-2" /> Directorio
            </LinkRouter>
          </li>
          <li className={`mb-2 p-2 py-4 flex items-center ${currentPage === 'Cambiar Contraseña' ? 'bg-primary-color' : ''}`}>
            <LinkRouter to="/cambiar-contraseña" onClick={() => handleLinkClick('Cambiar Contraseña')} className="flex items-center w-full">
              <FaLock className="mr-2" /> Cambiar Contraseña
            </LinkRouter>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
