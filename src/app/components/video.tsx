"use client";

import React from "react";

const VideoBackground = () => {
  return (
    <div className=" w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute  left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Content on top of video */}
     
    </div>
  );
};

export default VideoBackground;
