import { FaArrowRight } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CardButton({
  children,
  className = "",
  href,
  light = false,
  ...props
}) {
  return (
    <Link
      to={href}
      className={`${
        light
          ? "text-background group-hover/card:text-secondary"
          : "text-secondary group-hover/card:text-white"
      } group/link transition-colors duration-200 flex items-center gap-2 w-max uppercase text-xl ${className}`}
      {...props}
    >
      <span>{children}</span>{" "}
      <span
        className={`w-0 group-hover/link:w-24 group-hover/card:w-24 transition-all h-[2px] ${
          light
            ? "bg-secondary"
            : "group-hover/card:bg-white group-hover/link:bg-secondary"
        } ml-4 relative mt[1px]`}
      >
        <MdArrowForwardIos
          size={24}
          className="absolute left-full -translate-x-4 top-1/2 -translate-y-1/2"
        />
      </span>
    </Link>
  );
}
