"use client";

import React from "react";
import Location from "./components/Location";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const pathNest = pathname.replace("/", " ").trim().split("/");

  return (
    <>
      <Navbar />
      <Location location={pathNest} />
      {children}
    </>
  );
}
