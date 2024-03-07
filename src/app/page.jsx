"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  router.push("/bitcoin");
  return <></>;
}
