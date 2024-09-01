"use client";
import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./components/VideoPlayerControls";
import ice from "public/images/image1.jpg";
import yaz from "public/images/yaz.jpg";
import white from "public/images/white.jpg";
import code from "public/images/office.jpg";
import sum from "public/images/IMG_3671.jpg";
import Image from "next/image";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

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


  useEffect(() => {
    const video2 = videoRef2.current;
    if (video2) {
      setVideoDuration2(video2.duration);
    }
  }, []);


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


  useEffect(() => {
    const video3 = videoRef3.current;
    if (video3) {
      setVideoDuration3(video3.duration);
    }
  }, []);


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


  const togglePlayPause3 = () => {
    const video3 = videoRef3.current;
    if (video3) {
      setIsPaused3(!video3.paused);
      video3.paused ? video3.play() : video3.pause();
    }
  };
  return (
    <section className="main-section">
      <h1 className="font-medium text-2xl mb-3 tracking-tighter">
        Hey, I'm Bahadır 👋
      </h1>
      <p className=" leading-7 prose-neutral dark:prose-invert">
  Hello! I'm a software developer deeply fascinated by coding and technology. My tech journey is marked by a relentless quest for innovative solutions and a commitment to learning new technologies. I excel in collaborative environments and am passionate about contributing to pioneering projects. Currently, I'm working at
        <a
            href="https://learnity.ai"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline ml-1"
        >
          <svg width="15" height="15" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1024" height="1024" rx="92" fill="url(#paint0_linear_1310_26689)"/>
            <path
                d="M283 737.836V143H424.854V698.516C424.854 711.287 426.205 721.705 428.907 729.771C432.285 737.164 437.689 742.205 445.119 744.893C453.225 747.582 459.642 749.262 464.371 749.934C469.099 750.607 476.868 750.943 487.676 750.943H742V881H437.013C334.338 881 283 833.279 283 737.836Z"
                fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_1310_26689" x1="51.2" y1="32.9143" x2="1024" y2="1024"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#A796F7"/>
                <stop offset="1" stop-color="#5C4FF3"/>
              </linearGradient>
            </defs>
          </svg>

          <span style={{marginLeft: "5px", verticalAlign: "middle"}}>
            Learnity
          </span>

        </a>
        , where I focus on creating impactful software solutions.
      </p>

      <div className="columns-2 sm:columns-3 gap-4 my-8">
        {/* İlk resim */}
        <div className="relative h-40 hidden sm:block sm:mb-5">
          <Image
              alt="Me standing on stage at Reactathon delivering the keynote"
              src={ice}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center h-full"
          />
        </div>
        <div className="relative h-40 mb-20">
          <video
              className="rounded-lg object-cover w-full"
              ref={videoRef}
              loop
              muted
              autoPlay
          >
            <source
                src="https://res.cloudinary.com/dcdbtbmfz/video/upload/v1701819306/bdnhh6gks076f7ate7ci.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-4 right-4 z-10">
            <VideoPlayerControls
              progress={videoProgress}
              isPaused={isPaused}
              onPlayPause={togglePlayPause}
            />
          </div>
        </div>


        <div className="relative h-80 mb-20 sm:mb-20">
          <video
            className="rounded-lg object-cover w-full"
            ref={videoRef3}
            loop
            muted
            autoPlay
          >
            <source
              src="https://uniwave-main.s3.eu-central-1.amazonaws.com/ddd.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-4 right-4 z-10">
            <VideoPlayerControls
              progress={videoProgress3}
              isPaused={isPaused3}
              onPlayPause={togglePlayPause3}
            />
          </div>
        </div>


        <div className="relative h-40 hidden sm:block sm:mb-20">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={yaz}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover h-full"
          />
        </div>
        <div className="relative h-40 hidden sm:block sm:mb-5">
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
        <div className="relative h-40 mb-20">
          <video
            className="rounded-lg object-cover w-full"
            ref={videoRef2}
            loop
            muted
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dcdbtbmfz/video/upload/v1701819284/nhmtjmqfgoyyb4aq2np2.mp4"
              type="video/mp4"
            />
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
        <div className="flex justify-center flex-col gap-2 md:gap-3 md:flex-row">
          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/in/bahadir-araz/"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded py-1 text-sm inline-flex items-center justify-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mx-2 md:mx-0 flex-1"
            target="_blank"
          >
            <FaLinkedin style={{ fontSize: 20 }} />
            <span className="ml-2 text-xs">Connect with me on LinkedIn</span>
          </Link>

          {/* Instagram Link */}
          <Link
            href="https://instagram.com/bahadiraraz"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center justify-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mx-2 md:mx-0 flex-1"
            target="_blank"
          >
            <FaInstagram style={{ fontSize: 20 }} />
            <span className="ml-2 text-xs">Follow me on Instagram</span>
          </Link>

          {/* GitHub Link */}
          <Link
            href="https://github.com/bahadiraraz"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center justify-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mx-2 md:mx-0 flex-1"
            target="_blank"
          >
            <FaGithub style={{ fontSize: 20 }} />
            <span className="ml-2 text-xs">Check out my GitHub</span>
          </Link>
        </div>
      </div>
      <footer className="text-center p-4 mt-0 border-t border-neutral-200 dark:border-neutral-700">
  ©2024 Bahadır Araz. All rights reserved.
    </footer>
    </section>
  );
}
