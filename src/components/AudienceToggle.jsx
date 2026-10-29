import React from 'react';
import '../styles/AudienceToggle.css';

export default function AudienceToggle({ activeAudience, onSelectAudience }) {
  return (
    <div className="audience-toggle-section">
      <div 
        className="audience-pill-container" 
        role="group" 
        aria-label="Select Audience Type"
      >
        <button
          type="button"
          className={`audience-pill-btn ${activeAudience === 'personal' ? 'active' : ''}`}
          onClick={() => onSelectAudience('personal')}
          aria-pressed={activeAudience === 'personal'}
        >
          Personal
        </button>
        <button
          type="button"
          className={`audience-pill-btn ${activeAudience === 'business' ? 'active' : ''}`}
          onClick={() => onSelectAudience('business')}
          aria-pressed={activeAudience === 'business'}
        >
          Business
        </button>
      </div>
    </div>
  );
}
