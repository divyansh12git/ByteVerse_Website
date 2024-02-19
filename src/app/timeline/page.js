import React from "react";
import FooterSection from "../components/footer";
import TimelineHero from "../components/TimelineHero";
import Schedule from "../components/Schedule";
import CountdownUI from "../components/countdownUI";

export default function Home() {
  return (
    <main>
      <TimelineHero />
      <Schedule />
      <FooterSection />
    </main>
  );
}
