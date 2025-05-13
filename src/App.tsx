import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import History from './pages/History';
import Technical from './pages/Technical';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;