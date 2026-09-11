"use client";

import { useQuery } from "@tanstack/react-query";

export function usePlaybackPlaceholderQuery() {
  return useQuery({
    queryKey: ["playback", "placeholder"],
    queryFn: async () => ({ isPlaying: false }),
    enabled: false,
  });
}
