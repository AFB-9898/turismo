import React from "react";
import { Search, User, CalendarCheck } from "lucide-react";

const Header: React.FC = () => {
return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-700 text-white shadow-md">
      {/* Logo o nombre */}
    <div className="text-2xl font-bold">TurismoBolivia</div>

      {/* Iconos */}
    <div className="flex items-center gap-6 text-white">
        <button title="Buscar">
        <Search className="w-6 h-6 hover:text-yellow-300 transition" />
        </button>
        <button title="Reservas">
        <CalendarCheck className="w-6 h-6 hover:text-yellow-300 transition" />
        </button>
        <button title="Iniciar sesión">
        <User className="w-6 h-6 hover:text-yellow-300 transition" />
        </button>
    </div>
    </header>
);
};

export default Header;
