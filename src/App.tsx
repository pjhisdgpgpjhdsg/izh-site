import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import History from './pages/History';
import Technical from './pages/Technical';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Support from './pages/Support';
import { useEffect } from 'react';


function App() {
  
const playWelcomeSound = () => {
  const audio = new Audio('/sound.mp3');
  audio.volume = 0.5; // Уровень громкости от 0 до 1
  audio.play().catch((error) => {
    console.log('Autoplay prevented:', error);
  });

  useEffect(() => {
    playWelcomeSound();
  }, []);
};
  return (
    <BrowserRouter>
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