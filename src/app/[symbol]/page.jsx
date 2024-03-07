"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function SymbolPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <div>Symbol</div>;
}
