import Container from "@/components/Container";
import { Timelines } from "@/libs/Config";
import React from "react";

export default function Timeline() {
  return (
    <Container>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-block -rotate-2 border-[3px] border-black bg-fuchsia-400 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black]">
              Timeline
            </span>
            <h2 className="mt-6 text-3xl font-black uppercase leading-[1.05] text-black md:text-4xl">
              MARK YOUR CALENDAR
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-black/60 md:text-base">
              From early warm-ups to the grand finale. Find every key date and
              time right here.
            </p>
          </div>
          <div className="space-y-5">
            {/* {timeline.map((idx, t) => {
              return (
              );
            })} */}
            {Timelines.map((t) => {
              return (
                <div
                  key={t.name}
                  className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center"
                >
                  <h1 className="font-bold text-2xl">{t.name}</h1>
                  <p>{t.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
