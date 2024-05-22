import clsx from "clsx";

function CounterNumber({ children, size = "md" }) {
  return (
    <div
      className={clsx(
        "font-bold",
        size === "lg" ? "text-7xl" : "text-5xl",
        "text-secondary"
      )}
    >
      {children}
    </div>
  );
}

export default CounterNumber;
