import React from 'react';
import FruitCard from './FruitCard';

const fruits = [
  {
    name: 'Elma',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    nutrients: 'C vitamini, lif, antioksidanlar',
    minerals: 'Potasyum, kalsiyum',
    benefits: 'Kalp sağlığı, sindirim sistemi, bağışıklık sistemi'
  },
  {
    name: 'Muz',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    nutrients: 'B6 vitamini, C vitamini, lif',
    minerals: 'Potasyum, magnezyum',
    benefits: 'Enerji artışı, sindirim sağlığı, kas kramplarını önleme'
  },
  {
    name: 'Çilek',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    nutrients: 'C vitamini, folat, antioksidanlar',
    minerals: 'Manganez, potasyum',
    benefits: 'Cilt sağlığı, bağışıklık güçlendirme, kalp sağlığı'
  },
];

const FruitList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {fruits.map((fruit, index) => (
        <FruitCard key={index} {...fruit} />
      ))}
    </div>
  );
};

export default FruitList;