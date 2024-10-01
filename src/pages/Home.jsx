import {
  Features,
  GlobalImpact,
  HeroSection,
  HomeBanner,
  NewsSection,
  OurMission,
  WhatWeDoSection,
} from "../components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="px-4">
        <HomeBanner />
        <Features />
      </main>
      <OurMission />
      <WhatWeDoSection />
      <GlobalImpact />
      <main className="px-4">
        <NewsSection />
      </main>
    </>
  );
}
