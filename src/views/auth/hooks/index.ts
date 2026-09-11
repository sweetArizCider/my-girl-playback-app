"use client";

import { useMemo } from "react";

export function useAuthStatusPlaceholder() {
  return useMemo(() => ({ status: "disconnected" as const }), []);
}
