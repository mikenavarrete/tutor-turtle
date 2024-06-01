// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-content">
        <h1>Welcome to MyApp!</h1>
        <p>This is the home page of MyApp. Here you can find information about our services, team, and contact details.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
