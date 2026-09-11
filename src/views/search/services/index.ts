"use client";

import { useQuery } from "@tanstack/react-query";

export function useSearchPlaceholderQuery() {
  return useQuery({
    queryKey: ["search", "placeholder"],
    queryFn: async () => [],
    enabled: false,
  });
}
