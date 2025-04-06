
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <div className="container-custom py-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold">FOODIE CRAFT</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-red-500 hover:text-red-400">Home</Link>
          <Link to="/categories" className="text-white hover:text-gray-300">Categories</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-white hover:text-gray-300">
            Sign In
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
