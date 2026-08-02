"use client";

import { useEffect } from "react";

interface PlaybackControllerProps {
  isStage2Ready: boolean;
  isPlaying: boolean;
  isEnded: boolean;
  onAutoStart: () => void;
}

export function PlaybackController({
  isStage2Ready,
  isPlaying,
  isEnded,
  onAutoStart,
}: PlaybackControllerProps) {

  useEffect(() => {

    if (!isStage2Ready) return;

    if (isPlaying) return;

    if (isEnded) return;

    // Premium cinematic delay
    const timer = window.setTimeout(() => {

      onAutoStart();

    }, 2200);

    return () => clearTimeout(timer);

  }, [
    isStage2Ready,
    isPlaying,
    isEnded,
    onAutoStart,
  ]);

  return null;
}