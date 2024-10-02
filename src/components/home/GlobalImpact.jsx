const impactData = [
  {
    number: "97",
    unit: "Countries",
    description:
      "supported to generate jobs and livelihoods in the past two years",
    imageUrl: "/images/impact.webp",
  },
  {
    number: "100",
    unit: "Million",
    description:
      "people benefited from stronger policy and market conditions for sustainable energy",
    imageUrl: "/images/impact-1.webp",
  },
  {
    number: "400",
    unit: "Million",
    description:
      "registered voters supported to participate in elections in 2022 and 2023",
    imageUrl: "/images/impact-2.webp",
  },
  {
    number: "$100",
    unit: "Billion",
    description:
      "private capital aligned with the Sustainable Development Goals",
    imageUrl: "/images/impact.webp",
  },
];

export default function GlobalImpact() {
  return (
    <>
      <section className="w-full bg-secondary flex items-center py-12">
        <div className="m-auto max-w-7xl flex flex-wrap justify-between gap-12 text-background w-full p-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Global <br />
            Impact
          </h1>
          <h5 className="text-xl md:text-3xl max-w-4xl">
            DEED’s efforts in poverty alleviation, sustainable development, and
            environmental resilience are transforming communities and fostering
            long-term, equitable growth.
          </h5>
        </div>
      </section>
      <div className="h-px w-full bg-backgroundMuted"></div>
      <GlobalImpactSection />
    </>
  );
}

function GlobalImpactSection() {
  return (
    <section className="w-full min-h-[calc(100vh-112px)] bg-secondary grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {impactData.map((item, index) => (
        <div className="relative group/global" id="global-counts" key={index}>
          <div className="w-full h-full absolute top-0 left-0 right-0 hidden group-hover/global:block">
            <img
              // src="/images/hero-img.webp"
              src={item.imageUrl}
              alt={`Global Impact photo ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-full absolute top-0 left-0 right-0 hidden group-hover/global:block bg-lime-700/40"></div>
          <div className="z-10 relative p-12 flex gap-4 items-center h-full text-background">
            <div>
              <h2 className="text-[110px] font-bold mb-2 text-secondary text-stroke font-sans">
                {item.number}
              </h2>
              <h2 className="text-4xl font-bold mb-2 text-background group-hover/global:text-secondary">
                {item.unit}
              </h2>
              <p className="text-lg text-background group-hover/global:text-secondary">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
