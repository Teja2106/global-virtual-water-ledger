import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { countryData } from '../data/mockData';
import { Activity, Droplets, Users } from 'lucide-react';

export default function Dashboard() {
  const totalVolume = countryData.reduce((acc, curr) => acc + curr.totalConsumption, 0);
  const activeCountries = countryData.length;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Global Water Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Droplets className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <p className="text-gray-500">Total Volume Traded</p>
              <p className="text-2xl font-bold">{(totalVolume / 1000000).toFixed(1)}M m³</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Activity className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <p className="text-gray-500">Active Countries</p>
              <p className="text-2xl font-bold">{activeCountries}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-purple-500" />
            <div className="ml-4">
              <p className="text-gray-500">Population Served</p>
              <p className="text-2xl font-bold">2.5B</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Water Consumption by Country</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={countryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="agriculture" name="Agriculture" fill="#3B82F6" />
              <Bar dataKey="industrial" name="Industrial" fill="#10B981" />
              <Bar dataKey="domestic" name="Domestic" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}