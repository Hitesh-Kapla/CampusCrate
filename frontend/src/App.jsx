import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ItemsFeed } from './pages/ItemsFeed';
import { ItemDetail } from './pages/ItemDetail';
import { ReportItem } from './pages/ReportItem';
import { ClaimsManager } from './pages/ClaimsManager';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { AdminDashboard } from './pages/AdminDashboard';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemsFeed />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/report-item" element={<ReportItem />} />
          <Route path="/claims" element={<ClaimsManager />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
