"use client";

import { useQuery } from "@tanstack/react-query";

export function useLyricsPlaceholderQuery() {
  return useQuery({
    queryKey: ["lyrics", "placeholder"],
    queryFn: async () => ({ lines: [] }),
    enabled: false,
  });
}
