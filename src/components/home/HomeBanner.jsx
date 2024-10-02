import { useNavigate } from "react-router-dom";
import CardButton from "../CardButton";

export default function HomeBanner() {
  const navigate = useNavigate();
  return (
    <section
      className="group/card mt-4 bg-primary grid grid-cols-1 md:grid-cols-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <div className="relative overflow-hidden min-h-[200px] w-full order-2 md:order-1">
        <div className="absolute -bottom-[176px] left-1/2 -translate-x-1/2 mx-auto">
          <img
            src="/images/wheel.svg"
            alt="wheel"
            className="animate-spin-slow min-w-[352px]"
          />
        </div>
      </div>
      <div className="p-8 space-y-6 text-white order-1 md:order-2">
        <h2 className="text-4xl font-bold">The Summit of the Future</h2>
        <p className="text-xl">
          Charting a course towards achieving the Sustainable Development Goals
        </p>
        <CardButton card href="/" className="">
          EXPLORE NOW
        </CardButton>
      </div>
    </section>
  );
}
