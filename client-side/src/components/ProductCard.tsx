import React from 'react';

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  seller: {
    name: string;
    university: string;
  };
};

export default function ProductCard({ image, title, price, seller }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-indigo-600 mb-2">{price} MAD</p>
        <div className="text-sm text-gray-600">
          <p>{seller.name}</p>
          <p>{seller.university}</p>
        </div>
      </div>
    </div>
  );
}