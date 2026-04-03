"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#plans" onClick={() => setOpen(false)}>Plans</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#how" onClick={() => setOpen(false)}>How It Works</a>
        <a href="#waitlist" onClick={() => setOpen(false)}>Get Early Access</a>
      </div>
    </>
  );
}
