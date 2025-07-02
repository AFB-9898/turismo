import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toursData } from '../tours';
import type { ReservaDetalle } from '../../App';
import Message from '../Message';

interface Tour {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenes: string[];
  fechasDisponibles: string[];
}

interface BodyProps {
  logged: boolean;
  onVerDetalle: (reserva: ReservaDetalle) => void;
}

interface MessageState {
  type: 'success' | 'error';
  text: string;
}

const Body: React.FC<BodyProps> = ({ logged, onVerDetalle }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedDates, setSelectedDates] = useState<Record<number, string>>({});
  const [message, setMessage] = useState<MessageState | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<Record<number, number>>({});

  useEffect(() => {
    setTours(toursData);
    // Inicializa índices de carrusel
    const initIdx: Record<number, number> = {};
    toursData.forEach(t => { initIdx[t.id] = 0; });
    setCarouselIndex(initIdx);
  }, []);

  // Auto-avanzar carrusel cada 5 segundos
  useEffect(() => {
    if (tours.length === 0) return;
    const interval = setInterval(() => {
      setCarouselIndex(idx => {
        const newIdx: Record<number, number> = {};
        tours.forEach(t => {
          newIdx[t.id] = (idx[t.id] + 1) % t.imagenes.length;
        });
        return newIdx;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [tours]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const reservar = (tour: Tour) => {
    const selectedDate = selectedDates[tour.id];
    if (!logged) {
      setMessage({ type: 'error', text: '🔒 Por favor, inicia sesión para reservar.' });
      return;
    }
    if (!selectedDate) {
      setMessage({ type: 'error', text: '❌ Por favor, selecciona una fecha.' });
      return;
    }
    const nuevaReserva: ReservaDetalle = {
      tourId: tour.id,
      nombreTour: tour.nombre,
      fecha: selectedDate,
    };
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    reservas.push(nuevaReserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));
    setMessage({ type: 'success', text: '✅ ¡Reserva realizada exitosamente!' });
    setSelectedDates({ ...selectedDates, [tour.id]: '' });
  };

  const handleDateChange = (tourId: number, date: string) => {
    setSelectedDates({ ...selectedDates, [tourId]: date });
  };

  const prevImage = (tourId: number) => {
    setCarouselIndex(idx => ({
      ...idx,
      [tourId]: (idx[tourId] - 1 + tours.find(t => t.id === tourId)!.imagenes.length) % tours.find(t => t.id === tourId)!.imagenes.length
    }));
  };

  const nextImage = (tourId: number) => {
    setCarouselIndex(idx => ({
      ...idx,
      [tourId]: (idx[tourId] + 1) % tours.find(t => t.id === tourId)!.imagenes.length
    }));
  };

  return (
    <div>
      {message && <Message type={message.type} text={message.text} />}
      <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">
        Descubre Bolivia
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden relative transform hover:scale-105 transition duration-300"
            whileHover={{ y: -5 }}
            aria-label={`Tour ${tour.nombre}`}
          >
            {/* Carrusel de imágenes */}
            <div className="relative h-56">
              <img
                src={tour.imagenes[carouselIndex[tour.id]]}
                alt={`${tour.nombre} imagen ${carouselIndex[tour.id] + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <button onClick={() => prevImage(tour.id)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Anterior imagen"
              >‹</button>
              <button onClick={() => nextImage(tour.id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Siguiente imagen"
              >›</button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-teal-700">
                🧭 {tour.nombre}
              </h3>
              <p className="text-gray-600 mb-4">{tour.descripcion}</p>
              <p className="font-bold text-green-600 text-xl">${tour.precio}</p>
              {logged && (
                <div className="mt-4">
                  <select
                    value={selectedDates[tour.id] || ''}
                    onChange={(e) => handleDateChange(tour.id, e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-label={`Seleccionar fecha para ${tour.nombre}`}
                  >
                    <option value="" disabled>
                      📅 Selecciona una fecha
                    </option>
                    {tour.fechasDisponibles.map((fecha) => (
                      <option key={fecha} value={fecha}>
                        {new Date(fecha).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button
                disabled={!logged}
                className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                  logged
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
                onClick={() => reservar(tour)}
                aria-label={logged ? `Reservar ${tour.nombre}` : 'Inicia sesión para reservar'}
              >
                {logged ? '🚌 Reservar' : '🔒 Inicia sesión para reservar'}
              </button>
              {logged && (
                <button
                  onClick={() =>
                    onVerDetalle({
                      tourId: tour.id,
                      nombreTour: tour.nombre,
                      fecha: selectedDates[tour.id] || tour.fechasDisponibles[0] || '2025-07-15',
                    })
                  }
                  className="mt-3 w-full py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                  aria-label={`Ver detalles de ${tour.nombre}`}
                >
                  🔍 Ver Detalles
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Body;
