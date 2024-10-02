import Card from "../Card";

const featuredData = [
  {
    name: "Events",
    title: "DEED's Community Development Conference",
    description:
      "DEED's participation in the 2024 Community Development Conference to discuss sustainable practices.",
    url: "/",
  },
  {
    name: "Events",
    title: "Sustainable Future Summit",
    description:
      "A summit focused on shaping a sustainable future for local communities.",
    url: "/",
  },
  {
    name: "News",
    title: "DEED's Role in Poverty Alleviation",
    description:
      "DEED's recent initiatives in partnership with local governments to alleviate poverty in rural areas.",
    url: "/",
  },
  {
    name: "News",
    title: "Environmental Action Awards 2024",
    description:
      "Recognizing innovative solutions for environmental conservation led by local communities.",
    url: "/",
  },
  {
    name: "Stories",
    title: "Empowering Women in Agriculture",
    description:
      "How DEED is supporting women in rural areas to enhance agricultural productivity through education and resources.",
    url: "/",
  },
  {
    name: "Stories",
    title: "Fighting Climate Change Locally",
    description:
      "DEED's initiatives to combat climate change through local community actions.",
    url: "/",
  },
  {
    name: "News",
    title: "Urgent Need for Sustainable Development",
    description:
      "DEED's call for immediate actions to promote sustainable development and improve living standards.",
    url: "/",
  },
  {
    name: "Report",
    title: "Sustainability Report 2024",
    description:
      "An in-depth look at DEED's efforts in promoting sustainability and improving living standards across Pakistan.",
    url: "/",
  },
  {
    name: "Report",
    title: "Economic Impact of DEED's Initiatives in 2024",
    description:
      "An assessment of the positive economic impact DEED's projects have had on local communities.",
    url: "/",
  },
  {
    name: "Climate",
    title: "Preparing for a Sustainable Future",
    description:
      "DEED's vision for a future where communities thrive in harmony with nature.",
    url: "/",
  },
];

export default function Features() {
  return (
    <section className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold text-center mt-8">
          Featured
        </h2>
      </div>
      {featuredData.map((data, i) => (
        <Card
          key={i}
          className={i === 0 || i === 1 || i === 9 ? "md:col-span-2" : ""}
          data={data}
        />
      ))}
    </section>
  );
}
