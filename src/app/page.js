import React from 'react';
import ProfileWidget from '../components/ProfileWidget';
import GalleryWidget from '../components/GalleryWidget';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      
      {/* ===== LEFT SIDE  ===== */}
      <div className="hidden md:block md:w-1/2">
        
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="w-full md:w-1/2 p-8 space-y-6"></div>
      
      <div className="w-full md:w-1/2 p-8">
        <ProfileWidget />
        <GalleryWidget />

      </div>

    </main>
  );
}