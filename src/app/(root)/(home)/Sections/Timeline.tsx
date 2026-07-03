import Container from "@/components/Container";
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
            <div className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center">
              <h1 className="font-bold text-2xl">Open Registration</h1>
              <p>1 July - 27 August 2026</p>
            </div>
            <div className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center">
              <h1 className="font-bold text-2xl">Al Azhar Creative Steps</h1>
              <p>24 August 2026</p>
            </div>
            <div className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center">
              <h1 className="font-bold text-2xl">Technical Meeting</h1>
              <p>28 August 2026</p>
            </div>
            <div className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center">
              <h1 className="font-bold text-2xl">
                Opening Ceremony of Quatrolympic 19
              </h1>
              <p>31 August, 2026</p>
            </div>
            <div className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center">
              <h1 className="font-bold text-2xl">Competitions</h1>
              <p>31 Agustus - 5 September 2026</p>
            </div>
            <div className="p-6 bg-white shadow-[5px_5px_0px_0px_black] border-2 rounded-2xl block md:flex justify-between items-center">
              <h1 className="font-bold text-2xl">
                Closing Ceremony & Art Performance
              </h1>
              <p>5 September 2026</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
