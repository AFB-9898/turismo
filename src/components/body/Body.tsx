import React, { useState, useEffect } from "react";

type Tour = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenes: string[];
};

type Reserva = {
  tourId: number;
  nombreTour: string;
  fecha: string;
};

const Body: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const datosMock: Tour[] = [
      {
        id: 1,
        nombre: "Tour Salar de Uyuni",
        descripcion:
          "Una experiencia inolvidable en el mayor desierto de sal del mundo.",
        precio: 120.0,
        imagenes: [
          "/img/salar.jpeg",
          "/img/salar_1.jpeg",
          "/img/salar_2.jpeg",
          "/img/salar_3.jpeg",
        ],
      },
      {
        id: 2,
        nombre: "Tour Lago Titicaca",
        descripcion: "Descubre las islas flotantes y la cultura del altiplano.",
        precio: 95.0,
        imagenes: [
          "/img/titicaca.jpeg",
          "/img/titicaca_1.jpeg",
          "/img/titicaca_2.jpeg",
          "/img/titicaca_3.jpeg",
        ],
      },
    ];
    setTours(datosMock);
  }, []);

  const reservarTour = (tour: Tour) => {
    const fecha = prompt("Selecciona una fecha para tu reserva (Ej: 2025-07-15):");
    if (!fecha) return;

    const nuevaReserva: Reserva = {
      tourId: tour.id,
      nombreTour: tour.nombre,
      fecha,
    };

    const reservasGuardadas =
      JSON.parse(localStorage.getItem("reservas") || "[]") as Reserva[];
    reservasGuardadas.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    alert("¡Reserva guardada exitosamente!");
  };

  return (
    <div className="body-grid">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} reservarTour={reservarTour} />
      ))}
    </div>
  );
};

interface TourCardProps {
  tour: Tour;
  reservarTour: (tour: Tour) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, reservarTour }) => {
  const [indice, setIndice] = useState(0);

  // Auto‑slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % tour.imagenes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tour.imagenes.length]);

  const siguiente = () =>
    setIndice((prev) => (prev + 1) % tour.imagenes.length);
  const anterior = () =>
    setIndice((prev) =>
      prev - 1 < 0 ? tour.imagenes.length - 1 : prev - 1
    );

  return (
    <div className="tour-card">
      <div className="carousel">
        <img
          src={tour.imagenes[indice]}
          alt={tour.nombre}
          className="carousel-image"
        />
        <button className="carousel-btn prev" onClick={anterior}>
          ⟨
        </button>
        <button className="carousel-btn next" onClick={siguiente}>
          ⟩
        </button>
      </div>
      <div className="tour-content">
        <h2>{tour.nombre}</h2>
        <p>{tour.descripcion}</p>
        <div className="precio">${tour.precio}</div>
        <button
          className="reservar-btn"
          onClick={() => reservarTour(tour)}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default Body;
