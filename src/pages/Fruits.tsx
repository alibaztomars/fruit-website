import React from 'react';
import FruitList from '../components/FruitList';

const Fruits: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Meyve Çeşitleri</h1>
      <FruitList />
    </div>
  );
};

export default Fruits;