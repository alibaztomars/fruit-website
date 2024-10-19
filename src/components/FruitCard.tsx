import React from 'react';

interface FruitCardProps {
  name: string;
  image: string;
  nutrients: string;
  minerals: string;
  benefits: string;
}

const FruitCard: React.FC<FruitCardProps> = ({ name, image, nutrients, minerals, benefits }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="mb-2"><strong>Besin Değerleri:</strong> {nutrients}</p>
        <p className="mb-2"><strong>Mineraller:</strong> {minerals}</p>
        <p><strong>Faydaları:</strong> {benefits}</p>
      </div>
    </div>
  );
};

export default FruitCard;