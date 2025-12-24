"use client";

import React, { useState, useRef } from 'react'

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <section className='max-w-[1512px] mx-auto px-6 md:px-24 py-[110px]'>
        <div className='flex flex-col items-center'>
            <p className='text-[#0A0A0AB2] font-semibold text-sm'>Watch How to Apply It</p>
            <h2 className='text-[#0A0A0A] font-normal text-[56px] leading-[65px] mb-[10px]'> See How to Use It in the Field</h2>
            <p className='text-[#0A0A0A] text-sm leading-[150%] font-normal'>This video explains mixing, spraying and timing so you can apply confidently.</p>
            
            <div className='mt-[60px] relative w-full aspect-video  overflow-hidden shadow-lg'>
                {!isPlaying ? (
                    <div className='relative w-full h-full'>
                        <img 
                            src="/about-hero.png" 
                            alt="Video thumbnail"
                            className='w-full h-full object-cover'
                        />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-[#EABE0D] rounded-full flex items-center justify-center shadow-xl transition-colors'>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5v14l11-7L8 5z" fill="black"/>
                                </svg>
                            </div>
                        <button 
                            onClick={handlePlayClick}
                            className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors'
                            aria-label='Play video'
                        >
                            <div className='w-[130px] h-[130px] animate-breathe-slow bg-[#EABE0D33] rounded-full flex items-center justify-center'><div className='w-[90px] h-[90px] animate-breathe-slow bg-[#EABE0D33] rounded-full flex items-center justify-center'>
                            </div>
                            </div>
                        </button>
                    </div>
                ) : (
                    <video 
                        ref={videoRef}
                        className='w-full h-full'
                        controls
                        autoPlay
                        src="video.mp4"
                        onEnded={handleVideoEnded}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            
            <p className='text-[#0A0A0A]/60 italic text-base leading-[150%] font-normal mt-5'>This video shows mixing, spraying, timing, and real crop response so farmers can confidently apply the product in their fields.</p>
        </div>
    </section>
  )
}

export default VideoPlayer