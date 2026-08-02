"use client";

import { useEffect, useRef } from "react";
import { drawFrameToCanvas } from "@/utils/drawFrame";
import { imageCache } from "@/utils/imageCache";

interface CanvasRendererProps {
  currentFrame: number;
}

export function CanvasRenderer({ currentFrame }: CanvasRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastRenderedFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const cssWidth = container.clientWidth;
      const cssHeight = container.clientHeight;

      const img = imageCache.getImage(currentFrame);
      if (img) {
        drawFrameToCanvas(ctx, img, cssWidth, cssHeight);
        lastRenderedFrameRef.current = currentFrame;
      }
    };

    // Avoid redundant redraws if frame hasn't changed
    if (lastRenderedFrameRef.current !== currentFrame) {
      render();
    }

    const handleResize = () => {
      render();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="block h-full w-full object-cover select-none pointer-events-none"
    />
  );
}
