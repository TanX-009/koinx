"use client";

import MaxWidthContainer from "@/components/misc/MaxWidthContainer";
import { useSearchParams } from "next/navigation";

export default function SymbolPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <MaxWidthContainer>
      <div>Symbol</div>
    </MaxWidthContainer>
  );
}
