"use client";

import { useEffect, useState } from "react";
import { TOTAL_FRAMES } from "@/constants/frames";
import { LoadingState } from "@/types/frame";
import { preloadAllFrames } from "@/utils/frameLoader";

export function useFrameLoader(): LoadingState {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    loadedCount: 0,
    totalFrames: TOTAL_FRAMES,
    stage: 1,
    percentage: 0,
    isStage2Ready: false,
    isFullyLoaded: false,
  });

  useEffect(() => {
    let isMounted = true;

    preloadAllFrames(
      (loadedCount, total, stage) => {
        if (!isMounted) return;
        const percentage = Math.min(100, Math.round((loadedCount / total) * 100));
        setLoadingState((prev) => ({
          ...prev,
          loadedCount,
          stage,
          percentage,
          isFullyLoaded: loadedCount >= total,
        }));
      },
      () => {
        if (!isMounted) return;
        setLoadingState((prev) => ({
          ...prev,
          isStage2Ready: true,
        }));
      }
    ).catch((err) => {
      console.error("Frame preloader failed:", err);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return loadingState;
}
