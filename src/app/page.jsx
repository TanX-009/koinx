"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MaxWidthContainer from "@/components/misc/MaxWidthContainer";
import Panel from "@/components/background/Panel";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/cryptocurrencies/bitcoin");
  });
  return (
    <MaxWidthContainer>
      <div style={{ height: "var(--space-xs)" }}></div>
      <Panel>Redirecting...</Panel>
    </MaxWidthContainer>
  );
}
