import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <Container>
      <section className="relative bg-[#FDF6E9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
            {/* Left: Text content */}
            <div>
              <span className="inline-block -rotate-2 border-[3px] border-black bg-yellow-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black]">
                Quatrolympic 19
              </span>

              <h2 className="mt-6 text-4xl font-black uppercase leading-[1.05] text-black md:text-5xl">
                Experience The{" "}
                <span className="bg-lime-300 px-2 box-decoration-clone">
                  Excitement
                </span>
              </h2>

              <div className="mt-6 border bg-white p-4 shadow-[4px_4px_0px_0px_black]">
                <p className="text-base font-medium leading-relaxed text-black md:text-[17px]">
                  Quatrolympic 19 is an event organized by SMA Islam Al Azhar 4
                  as a platform to develop the creativity and talent of high
                  school and middle school students through competitions,
                  followed by a cultural and arts festival (pentas seni). This
                  event is a major annual tradition that has been held for over
                  a decade, driven by the high enthusiasm of its participants.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/about"
                  className="border-[3px] border-black bg-lime-300 px-6 py-3 text-sm font-black uppercase tracking-wide text-black shadow-[5px_5px_0px_0px_black] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_black]"
                >
                  Learn More
                </a>
                <a
                  href="/contact"
                  className="border-[3px] border-black bg-white px-6 py-3 text-sm font-black uppercase tracking-wide text-black shadow-[5px_5px_0px_0px_black] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_black]"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full -rotate-2 border-[3px] border-black bg-pink-300 sm:h-85 md:h-105" />
              <div className="relative h-70 w-full overflow-hidden border-[3px] border-black shadow-[8px_8px_0px_0px_black] sm:h-85 md:h-105">
                <Image
                  src="/assets/dokum.png"
                  alt="Pertunjukan tari tradisional nusantara"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
