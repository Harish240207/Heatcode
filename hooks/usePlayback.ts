"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TARGET_FPS, TOTAL_FRAMES } from "@/constants/frames";
import { PlaybackState } from "@/types/frame";

export function usePlayback(autoStart: boolean = false) {
  const [playback, setPlayback] = useState<PlaybackState>({
    currentFrame: 1,
    isPlaying: false,
    isEnded: false,
    isReplaying: false,
    fps: TARGET_FPS,
  });

  const frameRef = useRef<number>(1);
  const animFrameIdRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);

  const frameIntervalMs = 1000 / TARGET_FPS; // ~66.666ms per frame

  const stopAnimation = useCallback(() => {
    if (animFrameIdRef.current !== null) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }
    isPlayingRef.current = false;
  }, []);

  const tick = useCallback(
    (timestamp: number) => {
      if (!isPlayingRef.current) return;

      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;

      if (elapsed >= frameIntervalMs) {
        // Calculate exact frame advance without skipping steps
        const nextFrame = frameRef.current + 1;

        if (nextFrame > TOTAL_FRAMES) {
          stopAnimation();
          setPlayback((prev) => ({
            ...prev,
            currentFrame: TOTAL_FRAMES,
            isPlaying: false,
            isEnded: true,
            isReplaying: false,
          }));
          return;
        }

        frameRef.current = nextFrame;
        setPlayback((prev) => ({
          ...prev,
          currentFrame: nextFrame,
        }));

        lastFrameTimeRef.current = timestamp - (elapsed % frameIntervalMs);
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    },
    [frameIntervalMs, stopAnimation]
  );

  const play = useCallback(() => {
    if (isPlayingRef.current) return;

    if (frameRef.current >= TOTAL_FRAMES) {
      frameRef.current = 1;
    }

    isPlayingRef.current = true;
    lastFrameTimeRef.current = 0;

    setPlayback((prev) => ({
      ...prev,
      isPlaying: true,
      isEnded: false,
    }));

    animFrameIdRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const pause = useCallback(() => {
    stopAnimation();
    setPlayback((prev) => ({
      ...prev,
      isPlaying: false,
    }));
  }, [stopAnimation]);

  const restart = useCallback(() => {
    stopAnimation();
    frameRef.current = 1;
    lastFrameTimeRef.current = 0;

    setPlayback({
      currentFrame: 1,
      isPlaying: true,
      isEnded: false,
      isReplaying: true,
      fps: TARGET_FPS,
    });

    isPlayingRef.current = true;
    animFrameIdRef.current = requestAnimationFrame(tick);

    // Reset replaying flag after transition
    setTimeout(() => {
      setPlayback((prev) => ({ ...prev, isReplaying: false }));
    }, 300);
  }, [stopAnimation, tick]);

  useEffect(() => {
    if (autoStart && !isPlayingRef.current && !playback.isEnded) {
      play();
    }
  }, [autoStart, play, playback.isEnded]);

  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, [stopAnimation]);

  return {
    ...playback,
    play,
    pause,
    restart,
  };
}
