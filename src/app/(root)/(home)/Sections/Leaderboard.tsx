"use client";

import Container from "@/components/Container";
import { leaderboardData } from "@/libs/Config";
import React, { useState } from "react";

export default function Leaderboard() {
  const [index, setIndex] = useState(0);
  const current = leaderboardData[index];
  const canGoPrev = index < leaderboardData.length - 1;
  const canGoNext = index > 0;

  return (
    <Container>
      <section className="bg-[#FDF6E9] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rotate-2 border-[3px] border-black bg-orange-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black]">
              Hall Of Fame
            </span>
            <h2 className="mt-6 text-3xl font-black uppercase leading-[1.05] text-black md:text-4xl">
              Champions Through The Years
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-black/60 md:text-base">
              Browse the results of every competition category from past
              editions of Quatrolympic.
            </p>
          </div>
          <div className="mb-8 flex items-center justify-center gap-6 sm:gap-10">
            <button
              type="button"
              onClick={() => canGoPrev && setIndex(index + 1)}
              disabled={!canGoPrev}
              aria-label="Previous year"
              className="flex h-10 w-10 items-center justify-center border-[3px] border-black bg-white text-lg font-black text-black shadow-[3px_3px_0px_0px_black] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_black] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_black]"
            >
              ‹
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-black uppercase leading-none text-black md:text-3xl">
                {current.edition}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-black/50">
                {current.year}
              </p>
            </div>

            <button
              type="button"
              onClick={() => canGoNext && setIndex(index - 1)}
              disabled={!canGoNext}
              aria-label="Next year"
              className="flex h-10 w-10 items-center justify-center border-[3px] border-black bg-white text-lg font-black text-black shadow-[3px_3px_0px_0px_black] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_black] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_0px_black]"
            >
              ›
            </button>
          </div>

          {/* Table */}
          <div className="relative">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
            <div className="relative divide-y-[3px] divide-black border-[3px] border-black bg-white">
              {/* header row */}
              <div className="hidden grid-cols-[60px_1fr_1.2fr_1.2fr] bg-black px-5 py-3 text-xs font-black uppercase tracking-wide text-white sm:grid">
                <span>No</span>
                <span>Category</span>
                <span>Champion</span>
                <span>Runner-Up</span>
              </div>

              {current.results.map((row, i) => (
                <div
                  key={row.category}
                  className="grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[60px_1fr_1.2fr_1.2fr] sm:items-center sm:gap-0"
                >
                  <span className="flex h-7 w-7 items-center justify-center bg-black text-xs font-black text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-bold text-black/70">
                    {row.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-black text-black">
                    <span>🥇</span> {row.champion}
                  </span>
                  <span className="text-sm font-medium text-black/60">
                    {row.runnerUp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
