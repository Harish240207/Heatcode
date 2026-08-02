"use client";

import { CanvasRenderer } from "./CanvasRenderer";

interface CanvasPlayerProps {
  currentFrame: number;
}

export function CanvasPlayer({ currentFrame }: CanvasPlayerProps) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#030305]">
      {/* HTML5 Canvas Frame Engine */}
      <CanvasRenderer currentFrame={currentFrame} />

      {/* Luxury Cinematic Vignette & Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-[#030305]/70 opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#030305_100%)] opacity-90" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E50914]/5 blur-[140px]" />
    </div>
  );
}
