import React, { useState, useEffect } from "react";

type Tour = {
id: number;
nombre: string;
descripcion: string;
precio: number;
imagen: string;
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
        descripcion: "Una experiencia inolvidable en el mayor desierto de sal del mundo.",
        precio: 120.0,
        imagen: "/images/salar.jpg",
    },
    {
        id: 2,
        nombre: "Tour Lago Titicaca",
        descripcion: "Descubre las islas flotantes y la cultura del altiplano.",
        precio: 95.0,
        imagen: "/images/titicaca.jpg",
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

    // Guardar en localStorage
    const reservasGuardadas = JSON.parse(localStorage.getItem("reservas") || "[]");
    reservasGuardadas.push(nuevaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    alert("¡Reserva guardada exitosamente!");
};

return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {tours.map((tour) => (
        <div key={tour.id} className="bg-white shadow rounded-xl p-4">
        <img src={tour.imagen} alt={tour.nombre} className="rounded-xl h-40 w-full object-cover mb-3" />
        <h2 className="text-xl font-semibold">{tour.nombre}</h2>
        <p className="text-sm text-gray-600">{tour.descripcion}</p>
        <p className="mt-2 font-bold text-green-600">${tour.precio}</p>
        <button
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => reservarTour(tour)}
        >
            Reservar
        </button>
        </div>
        ))}
    </div>
    );
};

export default Body;
