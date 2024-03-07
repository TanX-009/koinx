"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/cryptocurrencies/bitcoin");
	});
	return <div>Redirecting...</div>;
}
