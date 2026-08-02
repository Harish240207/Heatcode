import {
  getFramePath,
  STAGE_2_FRAME_COUNT,
  TOTAL_FRAMES,
} from "@/constants/frames";
import { imageCache } from "@/utils/imageCache";

export async function loadSingleFrame(
  index: number
): Promise<HTMLImageElement> {
  if (imageCache.hasImage(index)) {
    return imageCache.getImage(index)!;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    const handleSuccess = () => {
      imageCache.setImage(index, img);
      resolve(img);
    };

    img.onload = handleSuccess;
    img.onerror = reject;
    img.src = getFramePath(index);

    if (typeof img.decode === "function") {
      img.decode().then(handleSuccess).catch(() => {});
    }
  });
}

export async function preloadAllFrames(
  onProgress?: (
    loadedCount: number,
    total: number,
    stage: 1 | 2 | 3
  ) => void,
  onStage2Ready?: () => void
): Promise<void> {
  let loadedCount = 0;

  const notifyProgress = (stage: 1 | 2 | 3) => {
    onProgress?.(loadedCount, TOTAL_FRAMES, stage);
  };

  // --------------------
  // Stage 1
  // --------------------

  try {
    await loadSingleFrame(1);

    loadedCount = 1;

    notifyProgress(1);
  } catch (err) {
    console.error(err);
  }

  // --------------------
  // Stage 2
  // --------------------

  const stage2Promises: Promise<void>[] = [];

  for (let i = 2; i <= STAGE_2_FRAME_COUNT; i++) {
    stage2Promises.push(
      loadSingleFrame(i)
        .then(() => {
          loadedCount++;
          notifyProgress(2);
        })
        .catch(console.warn)
    );
  }

  await Promise.all(stage2Promises);

  notifyProgress(2);

  // --------------------
  // Stage 3
  // --------------------

  const remainingFrames: number[] = [];

  for (
    let i = STAGE_2_FRAME_COUNT + 1;
    i <= TOTAL_FRAMES;
    i++
  ) {
    remainingFrames.push(i);
  }

  const CONCURRENCY = 8;

  let pointer = 0;

  async function worker() {
    while (pointer < remainingFrames.length) {
      const frame = remainingFrames[pointer++];

      try {
        await loadSingleFrame(frame);

        loadedCount++;

        notifyProgress(3);
      } catch (err) {
        console.warn(err);
      }
    }
  }

  await Promise.all(
    Array.from({ length: CONCURRENCY }, () => worker())
  );

  // ==========================
  // START ONLY AT 100%
  // ==========================

  onStage2Ready?.();

  notifyProgress(3);
}