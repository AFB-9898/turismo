import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUmbrellaBeach } from 'react-icons/fa';

interface SplashScreenProps {
onFinish: () => void;
  duration?: number; // duracion en ms
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, duration = 4000 }) => {
useEffect(() => {
    const timer = setTimeout(onFinish, duration);
    return () => clearTimeout(timer);
}, [duration, onFinish]);

return (
    <AnimatePresence>
    <motion.div
        className="fixed inset-0 flex items-center justify-center bg-teal-700"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
    >
        {/* Fondo con efecto de gotas de agua */}
        <div className="absolute inset-0 overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-[url('/water-droplets.png')] bg-cover bg-center opacity-20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
        </div>

        {/* Contenido central */}
        <motion.div
        className="z-10 flex flex-col items-center text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.8 }}
        >
        <FaUmbrellaBeach className="text-6xl mb-4" />
        <h1 className="text-4xl font-bold">Bienvenidos a Turismo Bolivia</h1>
        </motion.div>
    </motion.div>
    </AnimatePresence>
);
};

export default SplashScreen;
