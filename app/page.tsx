"use client";
import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from './components/VideoPlayerControls';
import ice from 'public/images/image1.jpg';
import yaz from 'public/images/yaz.jpg';
import white from 'public/images/white.jpg';
import code from 'public/images/office.jpg';
import sum from 'public/images/IMG_3671.jpg';
import Image from 'next/image';

import { FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>();
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress === currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };
  const [videoProgress2, setVideoProgress2] = useState<number>(0);
  const [videoDuration2, setVideoDuration2] = useState<number>();
  const [isPaused2, setIsPaused2] = useState(false);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  // New useEffect for the second video
  useEffect(() => {
    const video2 = videoRef2.current;
    if (video2) {
      setVideoDuration2(video2.duration);
    }
  }, []);

  // New useEffect for updating progress of the second video
  useEffect(() => {
    if (isPaused2) return;
    const currentTime2 = videoRef2.current?.currentTime;
    if (videoDuration2 != null && currentTime2 != null) {
      let loadingTimeout2 = setTimeout(() => {
        if (videoProgress2 === currentTime2 / videoDuration2) {
          setVideoProgress2((prev) => prev + 0.000001);
        } else {
          setVideoProgress2(currentTime2 / videoDuration2);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout2);
      };
    }
  }, [videoProgress2, videoDuration2, isPaused2]);

  // New function to toggle play/pause for the second video
  const togglePlayPause2 = () => {
    const video2 = videoRef2.current;
    if (video2) {
      setIsPaused2(!video2.paused);
      video2.paused ? video2.play() : video2.pause();
    }
  };
  const [videoProgress3, setVideoProgress3] = useState<number>(0);
  const [videoDuration3, setVideoDuration3] = useState<number>();
  const [isPaused3, setIsPaused3] = useState(false);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  // New useEffect for the second video
  useEffect(() => {
    const video3 = videoRef3.current;
    if (video3) {
      setVideoDuration3(video3.duration);
    }
  }, []);

  // New useEffect for updating progress of the second video
  useEffect(() => {
    if (isPaused3) return;
    const currentTime3 = videoRef3.current?.currentTime;
    if (videoDuration3 != null && currentTime3 != null) {
      let loadingTimeout3 = setTimeout(() => {
        if (videoProgress3 === currentTime3 / videoDuration3) {
          setVideoProgress3((prev) => prev + 0.000001);
        } else {
          setVideoProgress3(currentTime3 / videoDuration3);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout3);
      };
    }
  }, [videoProgress3, videoDuration3, isPaused3]);

  // New function to toggle play/pause for the second video
  const togglePlayPause3 = () => {
    const video3 = videoRef3.current;
    if (video3) {
      setIsPaused3(!video3.paused);
      video3.paused ? video3.play() : video3.pause();
    }
  };
  return (
 <section className="main-section">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Hey, I'm Bahadır 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
  Hello! I'm a software developer with a deep fascination for coding and technology. My journey in the tech world is characterized by a constant pursuit of innovative solutions and a dedication to learning new technologies. I thrive in collaborative environments and am passionate about contributing to groundbreaking projects. I'm currently working at 
  <a href="https://sorsor.org/" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
    <span style={{ marginRight: '5px', verticalAlign: 'middle' }}>Sorsor</span>
    <svg style={{ verticalAlign: 'middle', marginTop: '0px' }} width="15" height="15" viewBox="0 0 299 774" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 488.656V78.5C0.833333 72.3334 4.69575 60.989 23.5 60.989C43.5 60.989 48.8333 72.6667 48.5 78.5V162.643C48.5 171.813 49.51 181.932 57.0291 187.181C59.8151 189.126 63.176 190.489 67 190.489C79.5 190.489 86 184 86.5 176.5C86.7716 172.425 86.7512 155.669 86.6579 140.324C86.5807 127.623 88.726 112.227 101.031 109.081C102.728 108.647 104.553 108.428 106.5 108.5C108.376 108.569 110.128 108.871 111.753 109.343C123.68 112.809 126 127.466 126 139.885V209.837C126 219.532 126.935 230.406 134.958 235.847C137.713 237.715 141.062 239 145 239C161.5 239 168 230.5 168 224.5V25.3049C168 18.764 168.427 11.8603 172.822 7.01591C176.251 3.23686 181.447 -2.56298e-05 188.5 1.52204e-10C204 5.62669e-05 210.5 8.99993 211 15.5C211.348 20.0262 211.848 104.935 211.972 126.866L211.972 126.908C211.991 130.334 212.011 133.82 213.385 136.958C215.685 142.206 221.036 147.5 232.5 147.5C240.537 147.5 245.95 145.353 249.684 142.459C257.618 136.311 258 124.847 258 114.811V79.2057C258 74.0805 258.157 68.7484 260.827 64.3736C263.77 59.5515 269.036 55.0001 277.5 55.0001C294.5 55.0001 299 67.0001 299 71.5001V490.146C299 502.92 295.941 515.423 290.079 526.772L171.393 756.56C167.817 763.483 163.524 770.864 156.017 772.953C152.999 773.793 149.628 773.952 146.161 772.82C139.508 770.647 135.835 763.871 132.549 757.692L9.37021 526.116C3.21765 514.549 0 501.757 0 488.656ZM34 484.571V407.989C34 402.989 66 347.989 145.5 347.989C191.256 347.989 225.954 366.967 246.724 384.444C259.537 395.224 264.5 411.996 264.5 428.74V484.555C264.5 497.644 261.288 510.534 255.146 522.093L187.322 649.736C185.112 653.897 182.638 657.949 179.272 661.245C166.448 673.8 142.625 685.472 119.361 661.535C115.947 658.023 113.344 653.813 111.045 649.487L43.3538 522.093C37.2118 510.534 34 497.66 34 484.571Z" fill="url(#paint0_linear_232_3877)"/>
<circle cx="87.5" cy="503.489" r="18.5" fill="#8E4BDF"/>
<rect x="123" y="484.989" width="171" height="37" rx="18.5" fill="#8E4BDF"/>
<path d="M107.5 93.7C96.7 93.7 88 85 88 74.2V53.5C88 42.7 96.7 34 107.5 34C118.3 34 127 42.7 127 53.5V74.2C127.1 85 118.3 93.7 107.5 93.7Z" fill="url(#paint1_linear_232_3877)"/>
<defs>
<linearGradient id="paint0_linear_232_3877" x1="149.5" y1="0" x2="149.5" y2="773.626" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24F9D"/>
<stop offset="1" stop-color="#5F4AFF"/>
</linearGradient>
<linearGradient id="paint1_linear_232_3877" x1="107.5" y1="34" x2="107.5" y2="93.7" gradientUnits="userSpaceOnUse">
<stop stop-color="#F24F9D"/>
<stop offset="1" stop-color="#5F4AFF"/>
</linearGradient>
</defs>
    </svg>
  </a>, where I focus on creating impactful software solutions.
</p>



      <div className="columns-2 sm:columns-3 gap-4 my-8">
  {/* İlk resim */}
  <div className="relative h-40 mb-10 sm:mb-5">
    <Image
      alt="Me standing on stage at Reactathon delivering the keynote"
      src={ice}
      fill
      sizes="(max-width: 768px) 213px, 33vw"
      priority
      className="rounded-lg object-cover object-top sm:object-center h-full"
    />
  </div>
  <div className="relative h-40 mb-40">
    <video className="rounded-lg object-cover w-full" ref={videoRef} loop muted autoPlay>
      <source src="https://res.cloudinary.com/dcdbtbmfz/video/upload/v1701819306/bdnhh6gks076f7ate7ci.mp4" type="video/mp4" />
    </video>
    <div className="absolute top-4 right-4 z-10">
      <VideoPlayerControls
        progress={videoProgress}
        isPaused={isPaused}
        onPlayPause={togglePlayPause}
      />
    </div>
  </div>

  {/* Üst resimler */}
  <div className="relative h-80 mb-40 sm:mb-20">
  <Image
      alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
      src={sum}
      fill
      sizes="(max-width: 768px) 213px, 33vw"
      priority
      className="rounded-lg object-cover h-full"
    />
  </div>

  {/* Orta üst */}
  <div className="relative h-40 mb-40 sm:mb-20">
    <Image
      alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
      src={yaz}
      fill
      sizes="(max-width: 768px) 213px, 33vw"
      priority
      className="rounded-lg object-cover h-full"
    />
  </div>
  <div className="relative h-40 mb-10 sm:mb-5">
    <Image
      alt="My badge on top of a pile of badges from a Vercel meetup we held"
      src={code}
      fill
      sizes="(min-width: 768px) 213px, 33vw"
      priority
      className="rounded-lg object-cover h-full"
    />
  </div>
  {/* Alt Video Bölümü */}
  <div className="relative h-40 mb-40">
    <video className="rounded-lg object-cover w-full" ref={videoRef2} loop muted autoPlay>
      <source src="https://res.cloudinary.com/dcdbtbmfz/video/upload/v1701819284/nhmtjmqfgoyyb4aq2np2.mp4" type="video/mp4" />
    </video>
    <div className="absolute top-4 right-4 z-10">
      <VideoPlayerControls
        progress={videoProgress2}
        isPaused={isPaused2}
        onPlayPause={togglePlayPause2}
      />
    </div>
  </div>

  {/* Alt resimler */}
</div>





<div className="prose prose-neutral dark:prose-invert mt-8">
  <div className="flex justify-center">
    {/* LinkedIn Link */}
    <a href="https://www.linkedin.com/in/bahadir-araz/" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mx-2">
      <FaLinkedin style={{ fontSize: 20 }} />
      <span className="ml-2">Connect with me on LinkedIn</span>
    </a>

    {/* Instagram Link */}
    <a href="https://instagram.com/bahadiraraz" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mx-2">
      <FaInstagram style={{ fontSize: 20 }} />
      <span className="ml-2">Follow me on Instagram</span>
    </a>

    {/* GitHub Link */}
    <a href="https://github.com/bahadiraraz" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mx-2">
      <FaGithub style={{ fontSize: 20 }} />
      <span className="ml-2">Check out my GitHub</span>
    </a>
  </div>
</div>


    </section>
  );
}
