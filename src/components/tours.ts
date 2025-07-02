export interface Tour {
  id: number;
  nombre: string;
  descripcion: string;
  descripcionDetallada: string;
  ubicacion: string;
  precio: number;
  fechasDisponibles: string[];
  imagenes: string[];  // Array de imágenes para carrusel
}

export const toursData: Tour[] = [
  {
    id: 1,
    nombre: 'Salar de Uyuni',
    descripcion: 'Explora el desierto de sal más grande del mundo 🌐.',
    descripcionDetallada:
      'El Salar de Uyuni es el mayor desierto de sal del mundo, un paisaje surrealista con un reflejo espectacular durante la temporada de lluvias.',
    ubicacion: 'Departamento de Potosí, Bolivia',
    precio: 150,
    imagenes: [
      '/img/salar.jpeg',
      '/img/salar_1.jpeg',
      '/img/salar_2.jpeg',
      '/img/salar_3.jpeg',
    ],
    fechasDisponibles: ['2025-08-01', '2025-08-15', '2025-09-01'],
  },
  {
    id: 2,
    nombre: 'Lago Titicaca',
    descripcion: 'Visita las islas flotantes y el lago navegable más alto del mundo 🛶.',
    descripcionDetallada:
      'El Lago Titicaca es el lago navegable más alto del mundo, famoso por sus islas flotantes y su rica cultura andina.',
    ubicacion: 'Frontera entre Bolivia y Perú',
    precio: 120,
    imagenes: [
      '/img/titicaca.jpeg',
      '/img/titicaca_1.jpeg',
      '/img/titicaca_2.jpeg',
      '/img/titicaca_3.jpeg',
    ],
    fechasDisponibles: ['2025-08-10', '2025-08-20', '2025-09-10'],
  },
  {
    id: 3,
    nombre: 'Marquiri',
    descripcion: 'Pueblo encantador al este de La Paz, famoso por su mercado tradicional.',
    descripcionDetallada:
      'Marquiri es un pueblo pintoresco conocido por su feria de artesanías y su rica cultura local.',
    ubicacion: 'Provincia Pedro Domingo Murillo, Bolivia',
    precio: 80,
    imagenes: [
      '/img/marquiri.jpeg',
      '/img/marquiri_1.jpeg',
      '/img/marquiri_2.jpeg',
      '/img/marquiri_3.jpeg',
    ],
    fechasDisponibles: ['2025-07-20', '2025-07-25', '2025-08-05'],
  },
  {
    id: 4,
    nombre: 'Casa Vieja',
    descripcion: 'Zona histórica con arquitectura colonial y museos.',
    descripcionDetallada:
      'Casa Vieja ofrece un recorrido por la arquitectura colonial y espacios culturales llenos de historia.',
    ubicacion: 'Centro histórico de La Paz, Bolivia',
    precio: 100,
    imagenes: [
      '/img/casavieja.jpeg',
      '/img/casavieja_1.jpeg',
      '/img/casavieja_2.jpeg',
      '/img/casavieja_3.jpeg',
    ],
    fechasDisponibles: ['2025-07-18', '2025-07-25', '2025-08-02'],
  },
  // ...otros tours si lo deseas
];
