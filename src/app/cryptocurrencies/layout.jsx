"use client";

import { usePathname } from "next/navigation";
import Location from "./components/Location";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const pathNest = pathname.replace("/", " ").trim().split("/");

  return (
    <>
      <Location location={pathNest} />
      {children}
    </>
  );
}
