import React, { useState } from 'react';
import { Filter, Plus } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const categories = [
  'Tout',
  'Livres',
  'Électronique',
  'Meubles',
  'Vêtements',
  'Autre'
];

const sampleProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    title: 'Manuel de Calcul',
    price: 450,
    seller: {
      name: 'Jean Dupont',
      university: 'Université de Casablanca'
    },
    category: 'Livres'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    title: 'Ordinateur Portable - Comme Neuf',
    price: 5999,
    seller: {
      name: 'Marie Martin',
      university: 'École Mohammadia'
    },
    category: 'Électronique'
  }
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('Tout');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const filteredProducts = sampleProducts.filter(product => 
    (selectedCategory === 'Tout' || product.category === selectedCategory) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner */}
      <div className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            className="w-full h-full object-cover mix-blend-multiply opacity-75"
            alt="Students studying"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Student Sphere
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            La première marketplace dédiée aux étudiants marocains. Achetez et vendez facilement vos livres, équipements et plus encore.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Marché</h2>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Plus className="h-5 w-5" />
            Publier un Article
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold">Filtres</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Catégories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Fourchette de Prix</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0]} MAD</span>
                    <span>{priceRange[1]} MAD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}