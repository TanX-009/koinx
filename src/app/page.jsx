"use client";

import Image from "next/image";
import styles from "./styles.module.css";
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
