import React from "react";
import Image from 'next/image';



interface VideoPlayerControlsProps {
  progress: number;
  size?: number | undefined;
  width?: number | undefined;
  isPaused: boolean;
  onPlayPause: () => void;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  size = 40, // Çemberin boyutunu küçülttüm
  width = 3,
  isPaused,
  onPlayPause,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);
  const iconSize = size * 0.6; // Oynat/Dur butonunun boyutunu daha da küçülttüm


  return (
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
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
        <div className=" fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
        {isPaused ? 
          <Image src="https://res.cloudinary.com/dcdbtbmfz/image/upload/v1701869923/play-svgrepo-com_n2gbvb.png" alt="Play" width={size} height={size} /> : 
          <Image src="https://res.cloudinary.com/dcdbtbmfz/image/upload/v1701869920/pause-svgrepo-com_klsvvx.png" alt="Pause" width={size} height={size} />
        }
        </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
