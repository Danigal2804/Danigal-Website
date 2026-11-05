"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
};

export default function BackgroundVideo({ src, poster, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Some mobile browsers (iOS low-power mode, "Auto-Play Video Previews"
    // off, etc.) silently ignore the declarative autoplay attribute. A
    // programmatic play() retry recovers most of those cases; if it still
    // fails, the poster image keeps the background from showing a blank frame.
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
