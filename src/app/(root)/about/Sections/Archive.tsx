import Container from "@/components/Container";
import { driveLinks } from "@/libs/Config";
import React from "react";

export default function Archive() {
  return (
    <Container>
      <section className="bg-[#FDF6E9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-block -rotate-2 border-[3px] border-black bg-cyan-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black]">
              Last Year's Archive
            </span>
            <h2 className="mt-6 text-3xl font-black uppercase leading-[1.05] text-black md:text-4xl">
              Relive The Memories
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-black/60 md:text-base">
              Click a box below to open the full documentation recap on Google
              Drive.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {driveLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                <div className="relative flex items-center gap-4 border-[3px] border-black bg-white p-5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 sm:p-6">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-black text-3xl ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black uppercase leading-tight text-black md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-black/60">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="hidden shrink-0 border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-black uppercase sm:block">
                    Open Drive →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
