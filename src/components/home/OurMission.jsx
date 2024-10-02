import Button from "../Button";
import Container from "../Container";
import WhatWeDoSection from "./WhatWeDoSection";

export default function OurMission() {
  return (
    <>
      <section className="min-h-[calc(100vh-112px)] w-full bg-secondary flex items-center">
        <div className="m-auto max-w-7xl flex flex-wrap justify-between gap-12 text-background w-full p-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our <br />
            Mission
          </h1>
          <h5 className="text-xl md:text-3xl max-w-4xl">
            DEED (Drive for Economic and Environmental Development) aims to
            alleviate poverty, improve living standards, and promote sustainable
            development. Through partnerships with donors, government agencies,
            and local communities, we strive to create lasting positive impact
            in underprivileged areas.
          </h5>
        </div>
      </section>
      <WhatWeDoSection />
      <section className="p-4 w-full flex items-center">
        <Container className="space-y-12 p-4">
          <h2 className="text-3xl md:text-6xl font-bold mt-8">
            Collaborate for Sustainable Impact
          </h2>
          <p className="md:text-lg max-w-5xl">
            At DEED, we believe in building lasting partnerships that promote
            economic and environmental development. Our mission is to uplift
            communities through collaboration with donors, philanthropists,
            government agencies, and I/NGOs. By working together, we aim to
            create sustainable solutions that address poverty, improve living
            standards, and support inclusive, long-term growth.
          </p>
          <Button href="/">Partner With Us</Button>
        </Container>
      </section>
    </>
  );
}
