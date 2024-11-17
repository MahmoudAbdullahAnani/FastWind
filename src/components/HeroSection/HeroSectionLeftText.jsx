// 'use client'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './video-player';
// import Image from 'next/image';

export default function HeroSectionLeftText() {
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        experimentalSvgIcons: true,
        sources: [
            {
                src: "//vjs.zencdn.net/v/oceans.mp4",
                type: "video/mp4",
            },
        ],
        poster: "/og.jpg"
    };
    // const [coverVideo, setCoverVideo] = useState(true)
    // useEffect(() => {
    //     const btnPlayer = document.querySelector(".vjs-big-play-button")

    //     if (btnPlayer !== null) {
    //         // btnPlayer?.addEventListener("click", () => {
    //         //     setCoverVideo(prev => !prev)
    //         // })
    //     }

    // }, [])



    return (
        <div className="mt-[80px] opacity-0 animate-fadeIn">
            <h1 className="flex flex-nowrap gap-2 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline dark:text-[#fff]">Your</span>{' '}
                <span className="block text-[#29817e] dark:text-[#35c9c4] xl:inline">Digital</span>
            </h1>
            <div className="flex flex-nowrap gap-2 mt-2">
                <span className="block xl:inline dark:text-[#fff]">Data to enrich your</span>{' '}
                <span className="block text-[#0b5757] dark:text-[#34aaa6] xl:inline">online business</span>
            </div>
            <p className="mt-3 text-base text-gray-500 dark:text-[#fff] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Transform your digital presence with our comprehensive data solutions. We help businesses harness the power of data analytics to drive growth and success.
            </p>
            <div className="mt-5">
                <button className="bg-[#29817e] hover:bg-[#35c9c4] text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </div>

            <div className={`relative overflow-hidden my-5 max-w-[500px] border rounded-lg`}>
                <VideoPlayer
                    options={videoJsOptions}
                    className="animate-fadeIn rounded-lg"
                />

                {/* <img
                    src={`/og.jpg`} // https://raw.githubusercontent.com/MahmoudAbdullahAnani/New-Portfolio/refs/heads/main/public/Home-Avtar-removebg-preview.png
                    className={`absolute ${!coverVideo ? 'hidden' : 'block'}  top-0 left-0 w-full h-full`}
                /> */}
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                
            `}</style>
        </div>
    )
}
