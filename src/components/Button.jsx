import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Button({ children, className = "", href, ...props }) {
  const commonClasses = `group px-4 py-2 md:px-6 md:py-4 bg-primary hover:bg-secondary text-background transition-colors duration-200 flex items-center gap-2 w-max uppercase shadow-xl ${className}`;

  if (href) {
    return (
      <Link to={href} className={commonClasses} {...props}>
        <span>{children}</span>{" "}
        <FaArrowRight
          size={20}
          className="group-hover:translate-x-2 transition-transform"
        />
      </Link>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
}
