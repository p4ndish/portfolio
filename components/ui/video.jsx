"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "./skeleton"

const Video = React.forwardRef(({ 
  className, 
  src, 
  alt, 
  width, 
  height, 
  autoPlay = true, 
  muted = true, 
  loop = true, 
  controls = false, 
  lazyLoad = true,
  poster = null,
  ...props 
}, ref) => {
  const [isLoaded, setIsLoaded] = React.useState(!lazyLoad);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    if (!lazyLoad) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [lazyLoad]);

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full aspect-video" />
      )}
      <video
        ref={(el) => {
          // Handle both refs
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
          videoRef.current = el;
        }}
        className={cn("w-full h-auto", className, !isLoaded && "opacity-0")}
        src={isLoaded ? src : undefined}
        poster={poster}
        alt={alt}
        width={width}
        height={height}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        loading="lazy"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => setIsLoaded(true)}
        {...props}
      />
      {!controls && isLoaded && (
        <button 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            {isPlaying ? (
              <div className="w-4 h-4 bg-black"></div>
            ) : (
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1"></div>
            )}
          </div>
        </button>
      )}
    </div>
  )
})
Video.displayName = "Video"

export { Video } 