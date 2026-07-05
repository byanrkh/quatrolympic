"use client";

import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

export default function SponsorMarquee() {
  const [isSticky, setIsSticky] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const cachedRef = observerRef.current;

    // Observer ini mendeteksi jika pembungkus keluar sedikit saja dari top 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen tidak sepenuhnya terlihat di top, berarti dia mulai sticky
        setIsSticky(entry.intersectionRatio < 1);
      },
      {
        threshold: [1],
        rootMargin: "-1px 0px 0px 0px", // Trigger tepat saat menyentuh top: 0
      },
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, []);
  return (
    <div
      ref={observerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isSticky ? "border-b-2 border-t-2 border-amber-200 shadow-lg" : null
      }`}
    >
      <Marquee
        autoFill
        gradient={true}
        gradientColor="black"
        gradientWidth={40}
        speed={100}
        pauseOnHover
        className="bg-black text-amber-200 py-4 overflow-y-hidden"
      >
        <ul className="flex gap-5">
          <li className="px-20">Sponsor & Media Partner Goes Here</li>
        </ul>
      </Marquee>
    </div>
  );
}
