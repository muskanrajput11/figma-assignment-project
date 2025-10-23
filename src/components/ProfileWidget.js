// src/components/ProfileWidget.js
'use client'; 

import React, { useState } from 'react';

export default function ProfileWidget() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-[#2a2d32] p-6 rounded-2xl">
      
      {/* ===== TABS ===== */}
      <div className="flex space-x-2 bg-[#3c3f44] p-1 rounded-lg">
        
        {/* === TAB 1: About Me === */}
        <button
          onClick={() => setActiveTab('about')}
          className={`w-full py-2 rounded-lg text-sm font-medium
            ${activeTab === 'about' 
              ? 'bg-white text-black' 
              : 'bg-transparent text-gray-400 hover:bg-gray-600'}
          `}
        >
          About Me
        </button>

        {/* === TAB 2: Experiences === */}
        <button
          onClick={() => setActiveTab('experiences')}
          className={`w-full py-2 rounded-lg text-sm font-medium
            ${activeTab === 'experiences' 
              ? 'bg-white text-black' 
              : 'bg-transparent text-gray-400 hover:bg-gray-600'}
          `}
        >
          Experiences
        </button>

        {/* === TAB 3: Recommended === */}
        <button
          onClick={() => setActiveTab('recommended')}
          className={`w-full py-2 rounded-lg text-sm font-medium
            ${activeTab === 'recommended' 
              ? 'bg-white text-black' 
              : 'bg-transparent text-gray-400 hover:bg-gray-600'}
          `}
        >
          Recommended
        </button>
      </div>
      
      <div className="mt-6">
        
        {activeTab === 'about' && (
          <div className="text-gray-300 text-sm space-y-4">
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters - Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        )}

        {activeTab === 'experiences' && (
          <div className="text-gray-300 text-sm">
            <p>Experiences ka content yahaan aayega.</p>
          </div>
        )}

        {activeTab === 'recommended' && (
          <div className="text-gray-300 text-sm">
            <p>Recommended ka content yahaan aayega.</p>
          </div>
        )}
      </div>

    </div> 
  );
}