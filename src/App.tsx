import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReservationExpress from './components/ReservationExpress';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <HeroSection />
        <ReservationExpress />
      </main>
      <Footer />
    </div>
  );
}

export default App;