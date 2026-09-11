export function findActiveLyricIndex(currentMs: number, timestamps: number[]) {
  return timestamps.findLastIndex((timestamp) => timestamp <= currentMs);
}
