export default function Input({
  field = "input",
  label,
  type = "text",
  options = [],
  ...props
}) {
  return (
    <div>
      {label && (
        <label className="block font-medium text-foregroundMuted mb-1">
          {label}
        </label>
      )}

      {field === "input" && (
        <input
          type={type}
          {...props}
          className="mt-1 px-4 py-2 block w-full border border-background rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
        />
      )}

      {field === "textarea" && (
        <textarea
          {...props}
          className="mt-1 px-4 py-2 block w-full border border-background rounded-md shadow-sm focus:ring-secondary focus:border-secondary resize-none"
        />
      )}

      {field === "select" && (
        <select
          {...props}
          className="mt-1 px-4 py-2 block w-full border border-background rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
