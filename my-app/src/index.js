import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Lodging from './pages/lodging/Lodging';
import NotFound from './pages/notfound/NotFound';
import Footer from './components/footer/Footer';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);

