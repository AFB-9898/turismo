import React, { useEffect, useState } from 'react';
import type { ReservaDetalle } from '../App';

interface ReservasProps {
logged: boolean;
onVerDetalle: (reserva: ReservaDetalle) => void;
}

const Reservas: React.FC<ReservasProps> = ({ logged, onVerDetalle }) => {
const [reservas, setReservas] = useState<ReservaDetalle[]>([]);

useEffect(() => {
    if (logged) {
    const stored = localStorage.getItem('reservas');
    try {
        const parsed: ReservaDetalle[] = stored ? JSON.parse(stored) : [];
        setReservas(parsed);
    } catch (error) {
        console.error('Error parsing reservas from localStorage:', error);
        setReservas([]);
    }
    } else {
    setReservas([]);
    }
}, [logged]);

if (!logged) {
    return (
    <div className="p-6 text-center">
        <p className="text-xl text-gray-700">🔒 Por favor, inicia sesión para ver tus reservas.</p>
    </div>
    );
}

return (
    <div className="p-6">
    <h2 className="text-3xl font-bold mb-6 text-teal-800">Mis Reservas</h2>

    {reservas.length === 0 ? (
        <p className="text-gray-600">No tienes reservas hechas todavía.</p>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservas.map((reserva, index) => (
            <div
            key={`${reserva.tourId}-${reserva.fecha}-${index}`}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
            <div>
                <h3 className="text-2xl font-semibold text-teal-700 mb-2">
                🧭 {reserva.nombreTour}
                </h3>
                <p className="text-gray-600 mb-4">
                Fecha: {new Date(reserva.fecha).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
                </p>
            </div>
            <button
                onClick={() => onVerDetalle(reserva)}
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                aria-label={`Ver detalles de reserva ${reserva.nombreTour}`}
            >
                🔍 Ver Detalle
            </button>
            </div>
        ))}
        </div>
    )}
    </div>
);
};

export default Reservas;
