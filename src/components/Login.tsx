// Login.tsx
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usuario && clave) {
      onLogin();
    } else {
      alert('❗ Por favor, completa todos los campos');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">🔐 Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Usuario</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
