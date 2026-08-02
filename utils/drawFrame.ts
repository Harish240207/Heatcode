/**
 * High-DPI Canvas Frame Renderer with object-fit: cover aspect ratio logic
 */
export function drawFrameToCanvas(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cssWidth: number,
  cssHeight: number
): void {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  // Set internal canvas display dimensions for high DPI / Retina displays
  const bufferWidth = Math.round(cssWidth * dpr);
  const bufferHeight = Math.round(cssHeight * dpr);

  if (ctx.canvas.width !== bufferWidth || ctx.canvas.height !== bufferHeight) {
    ctx.canvas.width = bufferWidth;
    ctx.canvas.height = bufferHeight;
  }

  // Configure rendering smoothing for maximum clarity
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // Scale context to respect High DPI
  ctx.save();
  ctx.scale(dpr, dpr);

  // Object-fit: cover calculation
  const imgWidth = img.naturalWidth || img.width;
  const imgHeight = img.naturalHeight || img.height;
  const imgRatio = imgWidth / imgHeight;
  const viewportRatio = cssWidth / cssHeight;

  let drawWidth = cssWidth;
  let drawHeight = cssHeight;
  let offsetX = 0;
  let offsetY = 0;

  if (viewportRatio > imgRatio) {
    drawHeight = cssWidth / imgRatio;
    offsetY = (cssHeight - drawHeight) / 2;
  } else {
    drawWidth = cssHeight * imgRatio;
    offsetX = (cssWidth - drawWidth) / 2;
  }

  // Clear background before redraw
  ctx.fillStyle = "#030305";
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  // Draw image crisp centered with cover fit
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

  ctx.restore();
}
