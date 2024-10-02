import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CardButton({
  children,
  className = "",
  href,
  card = false,
  ...props
}) {
  return (
    <Link
      to={href}
      className={`group/link transition-colors duration-200 flex items-center gap-2 w-max uppercase text-xl text-secondary group-hover/card:text-white ${className} ${
        card ? "" : ""
      }`}
      {...props}
    >
      <span>{children}</span>
      <span
        className={`w-0 h-[2px] ml-4 relative mt-[1px] transition-all group-hover/link:w-24 group-hover/card:w-24 ${
          card ? "group-hover/card:bg-white" : "group-hover/link:bg-secondary"
        }`}
      >
        <MdArrowForwardIos
          size={24}
          className="absolute left-full top-1/2 -translate-x-[14px] -translate-y-1/2"
        />
      </span>
    </Link>
  );
}
