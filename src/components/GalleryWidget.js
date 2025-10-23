// src/components/GalleryWidget.js
'use client'; 

import React, { useState } from 'react'; 
import { FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const figmaImage = "/myimage.png";
const initialImages = [
  figmaImage,
  figmaImage,
  figmaImage,
];

const newImageToAdd = "/images.jpeg";

export default function GalleryWidget() {
  const [images, setImages] = useState(initialImages);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    if (!images.includes(newImageToAdd)) {
      setImages([...images, newImageToAdd]); 
    }
  };

  // Right arrow click
  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Left arrow click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    // Main widget container
    <div className="bg-[#2a2d32] p-6 rounded-2xl">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Gallery</h2>
        
        <div className="flex items-center space-x-2">
          {/* Add Image Button */}
          <button 
            onClick={handleAddImage}
            className="flex items-center space-x-2 bg-[#3c3f44] hover:bg-gray-600 text-white text-sm px-3 py-2 rounded-lg"
          >
            <FaPlus />
            <span>ADD IMAGE</span>
          </button>
          
          {/* Arrow Buttons */}
          <button 
            onClick={handlePrev} 
            className="bg-[#3c3f44] hover:bg-gray-600 text-white p-2 rounded-lg disabled:opacity-50"
      
            disabled={currentIndex === 0} 
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={handleNext} 
            className="bg-[#3c3f44] hover:bg-gray-600 text-white p-2 rounded-lg disabled:opacity-50"
          
            disabled={currentIndex >= images.length - 3} 
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* ===== IMAGE GALLERY (Final Layout) ===== */}
      <div className="grid grid-cols-3 gap-4">
        
        {images.slice(currentIndex, currentIndex + 3).map((imgUrl, index) => (
          <img
            key={`${imgUrl}-${index}`} 
            src={imgUrl}
            alt="Gallery image"
            className="w-full aspect-square object-cover rounded-lg"
          />
        ))}
      </div>
      
    </div>
  );
}