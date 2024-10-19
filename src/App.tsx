import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fruits from './pages/Fruits';
import About from './pages/About';
import AskAI from './pages/AskAI';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/about" element={<About />} />
            <Route path="/ask-ai" element={<AskAI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;