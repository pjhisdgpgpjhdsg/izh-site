import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import History from './pages/History';
import Technical from './pages/Technical';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Support from './pages/Support';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Wrapper component to trigger NProgress on route change
function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4); // Optional: set initial value
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300); // simulate a short delay

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function App() {
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    const playSound = () => {
      if (!soundPlayed) {
        const audio = new Audio('/sound.mp3');
        audio.volume = 0.5;
        audio.play().catch(err => console.log('Play error:', err));
        setSoundPlayed(true);
        document.removeEventListener('click', playSound);
      }
    };

    document.addEventListener('click', playSound);

    return () => {
      document.removeEventListener('click', playSound);
    };
  }, [soundPlayed]);

  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:id" element={<ModelDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
