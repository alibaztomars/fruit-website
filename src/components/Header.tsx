import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Apple size={32} className="mr-2" />
          <span className="text-xl font-bold">Meyve Bilgisi</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Ana Sayfa</Link></li>
            <li><Link to="/fruits" className="hover:underline">Meyveler</Link></li>
            <li><Link to="/about" className="hover:underline">Hakkımızda</Link></li>
          </ul>
        </nav>
        <Link to="/ask-ai" className="flex items-center bg-white text-green-500 px-3 py-1 rounded-full hover:bg-green-100 transition-colors">
          <MessageCircle size={20} className="mr-1" />
          <span>Yapay Zekaya Sor</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;