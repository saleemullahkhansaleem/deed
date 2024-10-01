import Card from "../Card";

const recentNewsData = [
  {
    name: "Speeches",
    title:
      "Roadmap to Economic Empowerment: Driving sustainable development action",
    description:
      "A DEED representative delivers a statement on the next generation of economic and environmental development efforts at a high-level event.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Stories",
    title: "Empowering every voice in underprivileged communities",
    description:
      "Meet individuals shaping their communities and learn how DEED is ensuring that everyone has a voice in their future.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Blog",
    title:
      "Building a sustainable future: DEED's approach to digital and environmental growth",
    description:
      "Exploring how DEED supports local innovations and inclusivity through sustainable development practices.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Stories",
    title: "Voices of resilience and hope",
    description:
      "A tribute to the strength and perseverance of those overcoming challenges in economically deprived regions.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Stories",
    title: "Youth-led development for a sustainable future",
    description:
      "Young people are driving the change in DEED's initiatives on sustainable development and community peacebuilding.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Stories",
    title: "Art for change: Empowering through creativity",
    description:
      "A group of young individuals in deprived areas is using art as a tool for expression and empowerment in their communities.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Press Releases",
    title:
      "DEED highlights global opportunities for economic balance and sustainability",
    description:
      "As global leaders meet to discuss challenges, DEED focuses on promoting ecological balance and sustainable economic practices.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
  {
    name: "Press Releases",
    title: "Urgent call for action to build inclusive, sustainable communities",
    description:
      "DEED emphasizes the need for immediate action to ensure sustainable communities that foster peace and justice for all.",
    url: "/",
    imageUrl: "/images/hero-img.webp",
  },
];

export default function NewsSection() {
  return (
    <section className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex justify-center">
        <h2 className="text-6xl font-bold  mt-8">
          Recent <br /> News
        </h2>
      </div>
      {recentNewsData.map((data, i) => (
        <Card
          key={i}
          data={data}
        />
      ))}
    </section>
  );
}
