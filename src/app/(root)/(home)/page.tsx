import React from "react";
import Hero from "./Sections/Hero";
import SponsorMarquee from "./Sections/SponsorMarquee";
import Registration from "./Sections/Registration/Main";
import Leaderboard from "./Sections/Leaderboard";
import Timeline from "./Sections/Timeline";
import Sponsor from "./Sections/Sponsor";

export default function page() {
  return (
    <>
      <Hero />
      <SponsorMarquee />
      <Registration />
      <Leaderboard />
      <Timeline />
      <Sponsor />
    </>
  );
}
