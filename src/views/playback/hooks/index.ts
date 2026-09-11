"use client";

import { useMemo } from "react";

export function usePlaybackStatePlaceholder() {
  return useMemo(
    () => ({ isPlaying: false, positionSeconds: 0 }),
    [],
  );
}
