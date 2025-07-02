import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-800 text-white py-12 px-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🌍 Turismo Bolivia
          </h2>
          <p className="text-sm">
            Explora los paisajes naturales, la cultura y las tradiciones de Bolivia con nosotros.
          </p>
          <p className="text-xs mt-4 text-gray-300">
            Desarrollado por: Abraham, Damaris, Diego, Paola y Yordy
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">📌 Encuéntranos</h3>
          {/* Mapa con marcador en OpenStreetMap */}
          <iframe
            title="Ubicación"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-64.743%2C-21.538%2C-64.740%2C-21.536&layer=mapnik&marker=-21.537012452571062,-64.74177616529778"
            className="w-full h-40 rounded-lg shadow"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="text-xs text-gray-300 mt-1">
            Coordenadas: Aqui es donde nos encontramos
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">📱 Síguenos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 14.83h-2.07v-4.43h-1.97v-1.53h1.97V9.47c0-2.08 1.27-3.22 3.12-3.22.89 0 1.65.07 1.87.1v1.53h-1.28c-1 0-1.2.48-1.2 1.18v1.54h2.4l-.31 1.53h-2.09v4.43z" />
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 5.5h-1.3c.2.6.5 1.1.5 1.8 0 2.5-2.1 4.5-4.7 4.5s-4.7-2-4.7-4.5c0-.7.3-1.2.5-1.8H7.5c-.3 0-.5.2-.5.5 0 1.9 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-.3-.2-.5-.5-.5zm-7.5 7.5h7v1h-7v-1zm5.5-8.5c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://whatsapp.com"
                className="flex items-center gap-2 hover:text-yellow-300 transition"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.8 14.4c-.3.8-.8 1.4-1.5 1.8-.8.4-1.7.6-2.7.4-1.4-.3-2.7-1.2-3.7-2.2-1.1-1.1-2-2.4-2.2-3.8-.2-1 .0-2 .4-2.8.4-.7 1-1.2 1.8-1.5.2-.1.5-.1.7 0 .2.1.3.3.4.5l.8 2.2c.1.2.1.4.0.6-.1.2-.2.3-.4.5-.2.1-.4.3-.5.5-.2.2-.3.4-.2.6.3.7.8 1.3 1.4 1.9.6.6 1.2 1.1 1.9 1.4.2.1.4.0.6-.2.2-.2.4-.4.5-.5.2-.1.4-.1.6 0 .2.1.4.2.5.4l2.2.8c.2.1.4.3.5.5.1.2.1.5 0 .7z" />
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
