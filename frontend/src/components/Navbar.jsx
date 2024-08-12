import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold">Home</Link>
        <Link to="/dashboard" className="font-bold">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
