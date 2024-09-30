export default function Container({ children, className = "", ...props }) {
  return (
    <div {...props} className={`container mx-auto ${className}`}>{children}</div>
  );
}
