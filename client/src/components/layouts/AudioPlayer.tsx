"use client";

import { useEffect, useRef } from "react";
import { useAppSelector } from "@/lib/hooks/hooks";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying } = useAppSelector((state) => state.audio);

  useEffect(() => {
    if (isPlaying) {
      // The play() function returns a Promise, so we catch potential errors
      // if the browser decides to block it for any reason.
      audioRef.current?.play().catch((error) => {
        console.error("Audio play was prevented:", error);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    // The 'loop' attribute makes the audio repeat automatically
    <audio ref={audioRef} src="/music/background-song.mp3" loop />
  );
}
