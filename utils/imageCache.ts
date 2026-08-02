/**
 * High Performance Image Cache Singleton
 * Manages preloaded HTMLImageElement instances in memory for zero-latency canvas rendering.
 */
class ImageCache {
  private cache: Map<number, HTMLImageElement> = new Map();

  /**
   * Store a preloaded frame image in memory
   */
  public setImage(frameIndex: number, img: HTMLImageElement): void {
    this.cache.set(frameIndex, img);
  }

  /**
   * Retrieve a preloaded frame image
   */
  public getImage(frameIndex: number): HTMLImageElement | undefined {
    return this.cache.get(frameIndex);
  }

  /**
   * Check if a frame is cached and loaded
   */
  public hasImage(frameIndex: number): boolean {
    const img = this.cache.get(frameIndex);
    return Boolean(img && img.complete && img.naturalWidth > 0);
  }

  /**
   * Return total cached count
   */
  public getSize(): number {
    return this.cache.size;
  }

  /**
   * Clear cache if needed
   */
  public clear(): void {
    this.cache.clear();
  }
}

export const imageCache = new ImageCache();
