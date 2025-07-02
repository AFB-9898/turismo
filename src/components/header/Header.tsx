import React from 'react';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaBook } from 'react-icons/fa';

interface HeaderProps {
  logged: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
  onHomeClick: () => void;
  onReservasClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ logged, onLoginClick, onLogout, onHomeClick, onReservasClick }) => {
  return (
    <header className="bg-teal-700 text-white shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick} aria-label="Ir a página principal">
        <img src="/Logo_Turismo.png" alt="Logo Turismo Bolivia" className="h-10 w-10" />
        <span className="text-2xl font-bold">Turismo Bolivia</span>
      </div>
      <nav className="flex gap-8 items-center">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 hover:text-yellow-300 transition"
          aria-label="Inicio"
        >
          <FaHome /> Inicio
        </button>
        <button
          onClick={() => {
            if (logged) onReservasClick();
            else onLoginClick();
          }}
          className={`flex items-center gap-2 transition ${
            logged ? 'hover:text-yellow-300' : 'opacity-50 cursor-not-allowed'
          }`}
          aria-label={logged ? 'Ver Reservas' : 'Iniciar sesión para ver reservas'}
        >
          <FaBook /> Reservas
        </button>
        {!logged ? (
          <button
            onClick={onLoginClick}
            className="flex items-center gap-2 bg-yellow-400 text-teal-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
            aria-label="Iniciar Sesión"
          >
            <FaSignInAlt /> Iniciar Sesión
          </button>
        ) : (
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            aria-label="Cerrar Sesión"
          >
            <FaSignOutAlt /> Cerrar Sesión
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
