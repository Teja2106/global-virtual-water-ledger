import { NavLink } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Droplets className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Global Virtual Water Ledger</span>
          </div>
          <div className="flex space-x-4">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700' : 'hover:bg-blue-700'}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/transactions"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700' : 'hover:bg-blue-700'}`
              }
            >
              Transactions
            </NavLink>
            <NavLink 
              to="/analytics"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md ${isActive ? 'bg-blue-700' : 'hover:bg-blue-700'}`
              }
            >
              Analytics
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}