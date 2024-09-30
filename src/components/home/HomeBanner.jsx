import { useNavigate } from "react-router-dom";
import CardButton from "../CardButton";

export default function HomeBanner() {
  const navigate = useNavigate();
  return (
    <section
      className="group mt-4 bg-primary grid grid-cols-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <div className="relative overflow-hidden">
        <div className="absolute -bottom-[176px] left-1/2 -translate-x-1/2 mx-auto ">
          <img src="/images/wheel.svg" alt="wheel" className="animate-spin-slow" />
        </div>
      </div>
      <div className="p-8 space-y-6 text-white">
        <h2 className="text-4xl font-bold">The Summit of the Future</h2>
        <p className="text-xl">
          Charting a course towards achieving the Sustainable Development Goals
        </p>
        <CardButton light href="/" className="">
          EXPLORE NOW
        </CardButton>
      </div>
    </section>
  );
}
