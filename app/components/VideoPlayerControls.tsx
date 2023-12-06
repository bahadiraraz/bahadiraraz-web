import React, { useState, useEffect } from "react";
import Image from 'next/image';

interface VideoPlayerControlsProps {
  progress: number;
  isPaused: boolean;
  isVideoLoading: boolean; // New state to track video loading
  onPlayPause: () => void;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  isPaused,
  isVideoLoading,
  onPlayPause,
}) => {
  const size = 30;
  const width = 3;
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = isVideoLoading ? dashArray : dashArray * (1 - progress); // Update based on loading state
  const iconSize = size * 0.5;

  return (
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#777777"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#000"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="group cursor-pointer flex justify-center items-center"
          onClick={onPlayPause}
        >
        <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
        {isPaused ? 
          <Image src="https://res.cloudinary.com/dcdbtbmfz/image/upload/v1701869923/play-svgrepo-com_n2gbvb.png" alt="Play" width={iconSize} height={iconSize} /> : 
          <Image src="https://res.cloudinary.com/dcdbtbmfz/image/upload/v1701869920/pause-svgrepo-com_klsvvx.png" alt="Pause" width={iconSize} height={iconSize} />
        }
        </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
