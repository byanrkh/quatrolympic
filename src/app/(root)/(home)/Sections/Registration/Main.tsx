import Container from "@/components/Container";
import { competitions } from "@/libs/Config";
import React from "react";
import { RegistrationCard } from "./RegistrationCard";

export default function Registration() {
  return (
    <Container>
      <section id="registration" className="bg-[#FDF6E9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rotate-2 border-[3px] border-black bg-cyan-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black]">
              CHOOSE YOUR CATEGORY
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[1.05] text-black md:text-5xl">
              COMPETITION REGISTRATION
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-black/70">
              Choose one of the 9 competition categories below and register your
              team now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((comp) => (
              <RegistrationCard key={comp.title} {...comp} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
