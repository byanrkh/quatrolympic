import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Container>
      <section className="relative overflow-hidden bg-[#FDF6E9] py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(gray 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block -rotate-2 border-[3px] border-black bg-yellow-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_black]">
            About The Event
          </span>

          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-black uppercase leading-[1.05] text-black md:text-6xl">
            A Decade Of{" "}
            <span className="bg-lime-300 px-2 box-decoration-clone">
              Talent & Tradition
            </span>
          </h1>

          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-justify text-base font-medium leading-relaxed text-black/80 md:text-lg">
            <p>
              Quatrolympic 19 is an event organized by SMA Islam Al Azhar 4 as a
              platform to develop creativity and talent among high school and
              middle school students through various competitions, followed by a
              cultural and art performance (pentas seni). This event is a major
              annual tradition that has been successfully held for over a
              decade, driven by the high enthusiasm of its participants.
            </p>
            <p>
              "Serenade of the Archipelago: Harmony of Heritage" was chosen as
              the theme for Quatrolympic 19 to reflect the diversity and harmony
              of the Indonesian archipelago (Nusantara), which is rich in
              cultural values. This theme serves as a space for students to
              channel their self-expression, strengthen togetherness, and foster
              a spirit of sportsmanship and collaboration. Through this series
              of activities, the event is expected to cultivate self-confidence,
              creativity, and awareness among the younger generation to
              recognize, appreciate, and love Indonesia's rich cultural
              heritage.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#registration"
              className="border-[3px] border-black bg-lime-300 px-6 py-3 text-sm font-black uppercase tracking-wide text-black shadow-[5px_5px_0px_0px_black] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_black]"
            >
              Register Now
            </Link>
            <Link
              href="#contact"
              className="border-[3px] border-black bg-white px-6 py-3 text-sm font-black uppercase tracking-wide text-black shadow-[5px_5px_0px_0px_black] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_black] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_0px_black]"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Wide banner image */}
        <div className="relative mx-auto mt-16 max-w-5xl px-6">
          <div className="absolute -left-3 -bottom-3 h-[240px] w-[calc(100%-1.5rem)] rotate-1 border-[3px] border-black bg-pink-300 sm:h-[320px] md:h-[420px]" />
          <div className="relative h-[240px] w-full overflow-hidden border-[3px] border-black shadow-[8px_8px_0px_0px_black] sm:h-[320px] md:h-[420px]">
            <Image
              src="/assets/afgan.webp"
              alt="Traditional dance performance at Quatrolympic"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-0 left-0 border-t-[3px] border-r-[3px] border-black bg-white px-4 py-2">
              <p className="text-xs font-black uppercase tracking-wide text-black">
                Afgan @ Quatrolympic 18
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
