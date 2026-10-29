import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AudienceToggle from './components/AudienceToggle';
import Hero from './components/Hero';
import './styles/global.css';

export default function App() {
  // 'business' is selected by default as shown in Screenshot 1
  const [activeAudience, setActiveAudience] = useState('business');

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="main-content">
        {/* Audience Selector (Personal / Business) */}
        <AudienceToggle 
          activeAudience={activeAudience} 
          onSelectAudience={setActiveAudience} 
        />

        {/* Hero Section */}
        <Hero activeAudience={activeAudience} />
      </main>
    </div>
  );
}
