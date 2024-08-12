import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Dashboard</h1>
      <div className="flex justify-center">
        <Link to="/dashboard/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add Flashcard</Link>
      </div>
    </div>
  );
};

export default Dashboard;
