"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Video = React.forwardRef(({ className, src, alt, width, height, autoPlay = true, muted = true, loop = true, controls = false, lazyLoad = true, ...props }, ref) => {
  const [isLoaded, setIsLoaded] = React.useState(!lazyLoad);
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

  return (
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
      className={cn("w-full h-auto", className)}
      src={isLoaded ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      loading="lazy"
      {...props}
    />
  )
})
Video.displayName = "Video"

export { Video } 