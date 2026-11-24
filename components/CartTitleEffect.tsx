
"use client";

import { useEffect } from "react";

interface CartTitleEffectProps {
  cartCount: number;
}

export default function CartTitleEffect({
  cartCount,
}: CartTitleEffectProps) {
  useEffect(() => {
    document.title = `Tree Shop (${cartCount})`;
  }, [cartCount]);

  return null;
}
