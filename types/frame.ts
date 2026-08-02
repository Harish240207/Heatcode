export interface FrameMetadata {
  index: number;
  path: string;
  isLoaded: boolean;
}

export interface PlaybackState {
  currentFrame: number;
  isPlaying: boolean;
  isEnded: boolean;
  isReplaying: boolean;
  fps: number;
}

export interface LoadingState {
  loadedCount: number;
  totalFrames: number;
  stage: 1 | 2 | 3;
  percentage: number;
  isStage2Ready: boolean;
  isFullyLoaded: boolean;
}

export interface SceneConfig {
  id: string;
  startFrame: number;
  endFrame: number;
  title?: string;
  subtitle?: string;
  narrative?: string;
  ctaText?: string;
}
