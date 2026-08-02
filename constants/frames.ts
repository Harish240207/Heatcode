import { SceneConfig } from "@/types/frame";

export const TOTAL_FRAMES = 295;
export const TARGET_FPS = 15;
export const STAGE_2_FRAME_COUNT = 30;
export const FRAME_BASE_PATH = "/frames";
export const FRAME_PREFIX = "ezgif-frame-";
export const FRAME_EXTENSION = ".webp";

/**
 * Dynamic Frame Loader Utility Path Generator
 * Format: /frames/ezgif-frame-001.webp -> /frames/ezgif-frame-295.webp
 */
export function getFramePath(index: number): string {
  const paddedIndex = String(index).padStart(3, "0");
  return `${FRAME_BASE_PATH}/${FRAME_PREFIX}${paddedIndex}${FRAME_EXTENSION}`;
}

export const SCENES: Record<string, SceneConfig> = {
  SCENE_1: {
    id: "scene-1",
    startFrame: 1,
    endFrame: 70,
    title: "BEYOND THE MASK",
  },
  SCENE_2: {
    id: "scene-2",
    startFrame: 71,
    endFrame: 150,
    subtitle: "A Cinematic Interactive Experience",
  },
  SCENE_3: {
    id: "scene-3",
    startFrame: 151,
    endFrame: 220,
    narrative: "Every Hero Has A Story.",
  },
  SCENE_4: {
    id: "scene-4",
    startFrame: 221,
    endFrame: 295,
    ctaText: "Experience Greatness",
  },
};
