"use client";

import { useEffect, useRef, useState } from "react";

export function useExperienceRow(openByDefault = true) {
  const [open, setOpen] = useState(openByDefault);
  const [height, setHeight] = useState<number | "auto">("auto");
  const bodyRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (bodyRef.current) setHeight(open ? bodyRef.current.scrollHeight : 0);
  }, [open]);

  return { open, setOpen, height, bodyRef };
}
