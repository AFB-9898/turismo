import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Login from './components/Login';
import DetalleReserva from './components/DetalleReserva';
import Reservas from './components/Reservas';
import SplashScreen from './components/SplashScreen/SplashScreen';

export type ReservaDetalle = {
  tourId: number;
  nombreTour: string;
  fecha: string;
};

export type View = 'home' | 'login' | 'detalle' | 'reservas';

function App() {
  const [logged, setLogged] = useState(false);
  const [view, setView] = useState<View>('home');
  const [detalle, setDetalle] = useState<ReservaDetalle | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const isLogged = localStorage.getItem('userLogged') === 'true';
    setLogged(isLogged);
  }, []);

  const handleLoginModal = () => {
    setView('login');
  };

  const handleLogin = () => {
    localStorage.setItem('userLogged', 'true');
    setLogged(true);
    setView('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('userLogged');
    setLogged(false);
    setView('home');
  };

  const handleVerDetalle = (reserva: ReservaDetalle) => {
    setDetalle(reserva);
    setView('detalle');
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Header
        logged={logged}
        onLoginClick={handleLoginModal}
        onLogout={handleLogout}
        onHomeClick={() => setView('home')}
        onReservasClick={() => setView('reservas')}
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {view === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Login onLogin={handleLogin} />
            </motion.div>
          )}

          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Body logged={logged} onVerDetalle={handleVerDetalle} />
            </motion.div>
          )}

          {view === 'reservas' && (
            <motion.div
              key="reservas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Reservas logged={logged} onVerDetalle={handleVerDetalle} />
            </motion.div>
          )}

          {view === 'detalle' && detalle && (
            <motion.div
              key="detalle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DetalleReserva reserva={detalle} onBack={() => setView('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
