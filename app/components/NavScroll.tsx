"use client";

import { useEffect } from "react";

export default function NavScroll() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const handleScroll = () => {
      nav.style.background =
        window.scrollY > 80
          ? "rgba(10,10,12,0.97)"
          : "linear-gradient(to bottom, rgba(10,10,12,0.95), rgba(10,10,12,0))";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
