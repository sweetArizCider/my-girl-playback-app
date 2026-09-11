"use client";

import { useMemo, useState } from "react";

export function useSearchInputPlaceholder() {
  const [query, setQuery] = useState("");

  return useMemo(
    () => ({ query, setQuery }),
    [query],
  );
}
