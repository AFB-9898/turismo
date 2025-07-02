import React from 'react';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { toursData } from './tours';
import type { ReservaDetalle } from '../App';

interface DetalleProps {
  reserva: ReservaDetalle;
  onBack: () => void;
}

const DetalleReserva: React.FC<DetalleProps> = ({ reserva, onBack }) => {
  const lugar = toursData.find((tour) => tour.id === reserva.tourId);

  if (!lugar) {
    return <div className="text-center text-red-500">Tour no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative h-80 md:h-96">
        <img
          src={lugar.imagen}
          alt={reserva.nombreTour}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button
          onClick={onBack}
          className="absolute top-5 left-5 bg-white bg-opacity-80 rounded-full p-3 shadow-md hover:bg-opacity-100 transition"
          aria-label="Volver a reservas"
        >
          <FaArrowLeft className="text-teal-700" />
        </button>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-extrabold text-teal-700 mb-3 flex items-center gap-3">
          🗺️ {reserva.nombreTour}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{lugar.descripcionDetallada}</p>
        <div className="flex flex-col md:flex-row gap-6 mb-6 text-gray-600">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-xl text-teal-600" />
            <p>
              <strong>Fecha de reserva:</strong> {reserva.fecha}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl text-teal-600" />
            <p>
              <strong>Ubicación:</strong> {lugar.ubicacion}
            </p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg"
          aria-label="Volver a reservas"
        >
          ← Volver a reservas
        </button>
      </div>
    </div>
  );
};

export default DetalleReserva;