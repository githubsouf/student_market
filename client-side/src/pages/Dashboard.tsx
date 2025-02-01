import React from 'react';
import { Users, ShoppingBag, CreditCard, TrendingUp, BarChart2, UserX, AlertCircle } from 'lucide-react';

// Données statiques pour la démonstration
const stats = {
  totalUsers: 1250,
  activeUsers: 890,
  totalProducts: 3456,
  totalSales: 245890,
  averageOrderValue: 750,
  newUsersToday: 25,
  reportedItems: 8
};

const recentUsers = [
  { id: 1, name: 'Ahmed Benani', email: 'ahmed.b@university.ma', university: 'Université Hassan II', status: 'actif', role: 'vendeur' },
  { id: 2, name: 'Sara Alami', email: 'sara.a@university.ma', university: 'Université Mohammed V', status: 'actif', role: 'acheteur' },
  { id: 3, name: 'Karim Idrissi', email: 'karim.i@university.ma', university: 'ENSA Marrakech', status: 'inactif', role: 'vendeur' },
  { id: 4, name: 'Leila Benjelloun', email: 'leila.b@university.ma', university: 'ENCG Casablanca', status: 'actif', role: 'acheteur' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tableau de Bord Administrateur</h1>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Utilisateurs Totaux</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="mt-4">
              <p className="text-sm text-green-600">+{stats.newUsersToday} aujourd'hui</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Produits Listés</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
              </div>
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ventes Totales</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSales} MAD</p>
              </div>
              <CreditCard className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Panier Moyen</p>
                <p className="text-2xl font-bold text-gray-900">{stats.averageOrderValue} MAD</p>
              </div>
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Activité des Utilisateurs</h3>
              <BarChart2 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded">
              <p className="text-gray-500">Graphique d'activité des utilisateurs</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Ventes Mensuelles</h3>
              <TrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded">
              <p className="text-gray-500">Graphique des ventes mensuelles</p>
            </div>
          </div>
        </div>

        {/* Liste des Utilisateurs Récents */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Utilisateurs Récents</h3>
              <div className="flex space-x-4">
                <div className="flex items-center text-red-600">
                  <UserX className="h-5 w-5 mr-1" />
                  <span className="text-sm">12 bloqués</span>
                </div>
                <div className="flex items-center text-orange-600">
                  <AlertCircle className="h-5 w-5 mr-1" />
                  <span className="text-sm">{stats.reportedItems} signalements</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Université</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.university}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'actif' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">Éditer</button>
                      <button className="text-red-600 hover:text-red-900">Bloquer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}