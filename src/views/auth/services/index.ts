"use client";

import { useQuery } from "@tanstack/react-query";

export function useAuthPlaceholderQuery() {
  return useQuery({
    queryKey: ["auth", "placeholder"],
    queryFn: async () => ({ connected: false }),
    enabled: false,
  });
}
