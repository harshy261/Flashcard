import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddFlashcard from './pages/AddFlashcard';
import EditFlashcard from './pages/EditFlashcard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add" element={<AddFlashcard />} />
          <Route path="/dashboard/edit/:id" element={<EditFlashcard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
