"use client";

import React, { useState } from "react";
import OrderForm from "../components/OrderForm"; // Ensure correct path


const VideoBackground = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Content on top of video */}
      <div className="absolute top-1/2 right-4 transform -translate-x-1/2 -translate-y-1/2">
      <button
        className="mt-4 bg-gradient-to-r from-red-600 via-black to-red-700 text-white py-2 rounded-lg hover:bg-blue-600 transition w-36 h-10"
        onClick={() => setShowForm(true)}
      >
        Buy Now
      </button>
      </div>
      {showForm && <OrderForm onClose={() => setShowForm(false)} />}

    </div>
  );
};

export default VideoBackground;
