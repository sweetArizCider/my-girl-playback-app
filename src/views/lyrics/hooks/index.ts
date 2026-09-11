"use client";

import { useMemo } from "react";

export function useLyricsStatePlaceholder() {
  return useMemo(
    () => ({ activeLine: -1 }),
    [],
  );
}
