"use client";
import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from './components/VideoPlayerControls';
import avatar from 'public/images/image1.jpg';
import yaz from 'public/images/image1.jpg';
import white from 'public/images/white.jpg';
import Image from 'next/image';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';

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
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Hey, I'm Bahadır 👋</h1>
      <div className="relative w-[20%] max-w-sm mx-auto my-8 rounded-xl overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
          />
        </div>
        <video className="w-full" ref={videoRef} loop muted autoPlay>
          <source src="public/fff.mp4" />
        </video>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        Hello! I'm a 21-year-old software developer deeply fascinated by coding and technology. Currently, I'm pursuing my Bachelor's degree in Mathematics at Dokuz Eylul University. My journey in software development is marked by a passion for creating innovative solutions and a dedication to learning new technologies. I have a rich experience in various programming areas and thrive in collaborative environments. My goal is to make a significant impact in the tech world through my skills and creativity.
      </p>
      <div className="mt-8">
        <a href="https://sorsor.org/" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
          <span className="ml-2">Currently working at Sorsor</span>
        </a>
      </div>
       <div className="columns-2 sm:columns-3 gap-4 my-8">
        {/* First video - adjusted style for aspect ratio */}
           

        {/* Swapped image */}
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={avatar}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>

        {/* Second video - adjusted style for aspect ratio */}
  
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={avatar}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={white}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={yaz}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        {/* Similar structure to the example with a list or grid layout */}

        {/* Important Links */}
        <div className="mt-8">
          {/* Each link as a separate item, styled similarly to the example */}
          <a href="https://www.linkedin.com/in/bahadir-araz/" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
            <FaLinkedin style={{ fontSize: 20 }} />
            <span className="ml-2">Connect with me on LinkedIn</span>
          </a>
          {/* Instagram Link */}
          <a href="https://instagram.com/bahadiraraz" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
            <FaInstagram style={{ fontSize: 20 }} />
            <span className="ml-2">Follow me on Instagram</span>
          </a>
          {/* More links */}
        </div>
      </div>


    </section>
  );
}