import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Meyve Bilgi Merkezine Hoş Geldiniz</h1>
      <p className="text-xl mb-8">Meyvelerin dünyasını keşfedin, besin değerlerini öğrenin ve sağlığınıza katkılarını görün.</p>
      <div className="space-y-4">
        <Link to="/fruits" className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-green-600 transition-colors">
          Meyveleri Keşfet
        </Link>
        <p className="mt-4">
          Merak ettiğiniz sorular mı var? <Link to="/ask-ai" className="text-green-500 hover:underline">Yapay zekaya sorun!</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;