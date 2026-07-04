"use client";

import { useCountdown, TARGET_DATE } from "./useCountdown";

function Box({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white border-4 border-black rounded-xl w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <span className="text-2xl sm:text-3xl md:text-5xl font-black text-black tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-black uppercase mt-3 tracking-widest text-black/60">
        {label}
      </span>
    </div>
  );
}

export default function CountdownLight() {
  const { timeLeft, isOver } = useCountdown(TARGET_DATE);

  return (
    <section className="relative bg-[#F5D89A] border-y-4 border-black py-16 md:py-24 overflow-hidden">
      {/* texture dot grid */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

      <div className="relative px-4 md:px-12 lg:px-24 mx-auto max-w-4xl text-center">
        <span className="inline-block bg-black text-white font-black uppercase text-xs px-4 py-1.5 border-2 border-black mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          Countdown
        </span>

        <h2 className="text-3xl md:text-5xl font-black uppercase mb-3">
          ROAD TO QUATROLYMPIC
        </h2>
        <p className="font-medium text-gray-800 mb-10">
          August 31, 2026 — don't miss out!
        </p>

        {isOver ? (
          <p className="text-2xl font-black uppercase bg-black text-white inline-block px-6 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            THE EVENT HAS STARTED! 🎉
          </p>
        ) : (
          <div className="flex justify-center gap-3 sm:gap-5 md:gap-6">
            <Box value={timeLeft.d} label="Days" />
            <Box value={timeLeft.h} label="Hours" />
            <Box value={timeLeft.m} label="Minutes" />
            <Box value={timeLeft.s} label="Seconds" />
          </div>
        )}
      </div>
    </section>
  );
}
