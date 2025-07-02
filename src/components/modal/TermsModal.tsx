import React from "react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-4 rounded-lg shadow-lg p-6 relative">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Términos y Condiciones
        </h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            Este sitio permite realizar reservas y pagos para tours locales. Los datos ingresados serán tratados con confidencialidad.
          </p>
          <p>
            La reserva está sujeta a disponibilidad y confirmación por parte de la administración.
          </p>
          <p>
            Al continuar, aceptas los términos establecidos por el operador turístico.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all"
        >
          Cerrar
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
          aria-label="Cerrar"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
