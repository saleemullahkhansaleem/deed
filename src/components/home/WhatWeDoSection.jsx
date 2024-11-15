import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CardButton from "../CardButton";
import { useState } from "react";

const slidesData = [
  {
    title: "Sustainable Transformation",
    description:
      "Including green, inclusive, and digital transitions: DEED works with communities to bring about changes in systems and structures that support sustainable development.",
    imageUrl: "/images/mission/structural-transformation.webp",
    color: "#1abc9c", // Turquoise
  },
  {
    title: "Leaving No One Behind",
    description:
      "A rights-based approach focused on empowerment, inclusion, equity, human agency, and human development for underprivileged communities.",
    imageUrl: "/images/mission/leaving-no-one-behind.webp",
    color: "#e74c3c", // Red
  },
  {
    title: "Building Resilience",
    description:
      "Strengthening communities to prevent, mitigate, and respond to crises, conflicts, natural disasters, and economic shocks.",
    imageUrl: "/images/mission/building-resilience.webp",
    color: "#3498db", // Blue
  },
  {
    title: "Poverty and Inequality",
    description:
      "Addressing inequality of opportunities by investing in the capabilities of people to lift themselves above the poverty line and continue progressing.",
    imageUrl: "/images/mission/poverty-inequality.webp",
    color: "#f39c12", // Orange
  },
  {
    title: "Community Governance",
    description:
      "Helping communities address emerging complexities by improving governance systems, promoting transparency, and reducing risks.",
    imageUrl: "/images/mission/community-governance.webp",
    color: "#9b59b6", // Purple
  },
  {
    title: "Environmental Resilience",
    description:
      "Supporting communities in building resilience to climate change, natural disasters, and social challenges by promoting environmental protection.",
    imageUrl: "/images/mission/environmental-resilience.webp",
    color: "#2ecc71", // Green
  },
  {
    title: "Environmental Sustainability",
    description:
      "Putting nature at the heart of development by helping communities protect, manage, and value their natural resources.",
    imageUrl: "/images/mission/environmental-sustainability.webp",
    color: "#1f618d", // Dark Blue
  },
  {
    title: "Energy Access",
    description:
      "Increasing access to clean and renewable energy for underserved communities, promoting sustainable energy solutions.",
    imageUrl: "/images/mission/energy-access.webp",
    color: "#d35400", // Dark Orange
  },
  {
    title: "Gender Equality",
    description:
      "Challenging barriers to gender equality and empowering women through economic participation and leadership in their communities.",
    imageUrl: "/images/mission/gender-equality.webp",
    color: "#e84393", // Pink
  },
  {
    title: "Digital Inclusion",
    description:
      "Supporting underserved communities to build inclusive, ethical, and sustainable digital platforms for social and economic growth.",
    imageUrl: "/images/mission/digital-inclusion.webp",
    color: "#16a085", // Greenish-Teal
  },
  {
    title: "Strategic Innovation",
    description:
      "Empowering communities to develop adaptive and resilient systems that respond to long-term development needs.",
    imageUrl: "/images/mission/strategic-innovation.webp",
    color: "#8e44ad", // Violet
  },
  {
    title: "Development Financing",
    description:
      "Partnering with governments, NGOs, and the private sector to mobilize funds and align capital for sustainable development initiatives.",
    imageUrl: "/images/mission/development-financing.webp",
    color: "#c0392b", // Dark Red
  },
];

export default function WhatWeDoSection() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 xl:min-h-[calc(100vh-112px)] w-full">
        <div className="w-full h-full bg-backgroundMuted flex items-center">
          <div className="space-y-8 max-w-lg m-auto p-4">
            <h2 className="text-4xl md:text-6xl font-bold mt-8">What we do</h2>
            <p className="md:text-lg">
              DEED (Drive for Economic and Environmental Development) is
              dedicated to improving living standards by addressing poverty and
              promoting sustainable development. We partner with communities,
              donors, and organizations to create lasting change through
              economic empowerment, environmental sustainability, and social
              development initiatives. Together, we build pathways to a brighter
              future for underprivileged communities.
            </p>
            <CardButton>Learn More</CardButton>
          </div>
        </div>
        <div className="h-full xl:h-[calc(100vh-112px)] w-full overflow-x-hidden relative">
          <div className="w-[1200%] grid grid-cols-12">
            {slidesData.map((item, index) => (
              <div
                key={index}
                className="w-full h-full xl:h-[calc(100vh-112px)] transition-transform duration-500"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                <img
                  // src="/images/hero-img.webp"
                  src={item.imageUrl}
                  alt="What we do photo"
                  className="w-full h-2/5 object-cover"
                />
                <div className="w-full h-3/5 flex flex-col justify-between">
                  <div className="min-h-24"></div>
                  <div className="max-w-3xl px-8">
                    <h2 className="text-xl md:text-3xl mb-2"> {item.title} </h2>
                    <p className="text-foregroundMuted text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="min-h-24 flex items-end">
                    <div
                      className={`w-full h-4 mb-0`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-0 left-0 top-[40%] p-4 md:p-8 flex gap-2 flex-wrap items-center justify-between w-full font-bold">
            <nav className="flex text-sm md:text-base">
              <span
                onClick={() => setSlide(0)}
                className={`uppercase border-b-2 ${
                  slide < 3 ? "border-primary" : "border-backgroundMuted"
                } cursor-pointer`}
              >
                Directions of change
              </span>
              <span className="w-4 border-b-2 border-backgroundMuted"></span>
              <span
                onClick={() => setSlide(3)}
                className={`uppercase border-b-2 ${
                  slide > 2 && slide < 9
                    ? "border-primary"
                    : "border-backgroundMuted"
                } cursor-pointer`}
              >
                Signature solutions
              </span>
              <span className="w-4 border-b-2 border-backgroundMuted"></span>
              <span
                onClick={() => setSlide(9)}
                className={`uppercase border-b-2 ${
                  slide > 8 ? "border-primary" : "border-backgroundMuted"
                } cursor-pointer`}
              >
                Enablers
              </span>
            </nav>
            <p className="ml-auto">
              {slide < 3
                ? slide + 1 + " / 3"
                : slide > 2 && slide < 9
                ? slide - 2 + " / 6"
                : slide - 8 + " / 3"}
            </p>
          </div>
          <div className="absolute right-4 bottom-8 flex gap-4 justify-end">
            <button
              disabled={slide === 0}
              title="Back"
              className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-primary rounded-full text-background disabled:bg-muted"
              onClick={() => setSlide((prev) => (prev > 0 ? prev - 1 : prev))}
            >
              <MdArrowBackIosNew size={20} />
            </button>
            <button
              disabled={slide === slidesData.length - 1}
              title="Next"
              className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-primary rounded-full text-background disabled:bg-muted"
              onClick={() =>
                setSlide((prev) =>
                  prev < slidesData.length - 1 ? prev + 1 : prev
                )
              }
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
