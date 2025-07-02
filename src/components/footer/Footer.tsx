import React from "react";

const Footer: React.FC = () => {
return (
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-info">
        <h2>Turismo Tarija</h2>
        <p>
            Plataforma local para reservar tours y explorar los paisajes de Tarija.
        </p>
        <p className="footer-credits">Desarrollado por Abraham</p>
        </div>

        <div className="footer-map">
        <iframe
            title="Ubicación"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-64.743%2C-21.537%2C-64.739%2C-21.534&layer=mapnik"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
        ></iframe>
        </div>

        <div className="footer-social">
        <h3>Síguenos</h3>
        <ul>
            <li><a href="#">📘 Facebook</a></li>
            <li><a href="#">📸 Instagram</a></li>
            <li><a href="#">💬 WhatsApp</a></li>
        </ul>
        </div>
    </div>
    </footer>
);
};

export default Footer;
