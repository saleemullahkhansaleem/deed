import { Link } from "react-router-dom";
import CardButton from "./CardButton";

export default function Card({
  className = "",
  data = {
    name: "John",
    title: "lorem Ipsum",
    description:
      "lorem Ipsum is Lorem Ipsum, Lorem Ipsum is Lore Lorem Ipsum, Lorem Ipsum is Lore Lorem Ipsum",
    url: "/",
    btnText: "Learn More",
  },
}) {
  return (
    <div
      className={`group min-h-80 bg-backgroundMuted p-4 flex flex-col justify-between relative cursor-pointer ${className}`}
    >
      <div>
        <p className="uppercase text-sm mb-6">{data.name}</p>
        <h3 className="text-2xl mb-12">{data.title}</h3>
        <p>{data.description}</p>
      </div>
      <Link to={data.url} className="">
        <img
          src="/images/hero-img.webp"
          alt="Card Photo"
          className="w-0 group-hover:w-full h-full object-cover absolute top-0 left-0 transition-all duration-300"
        />
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-80 h-16 bg-black/80 transition-all duration-200 blur-lg"></div>
      </Link>
      <CardButton className="mb-0 z-10" href={data.url}>
        {data.btnText || "Learn More"}
      </CardButton>
    </div>
  );
}
