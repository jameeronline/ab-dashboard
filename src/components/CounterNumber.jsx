import clsx from "clsx";

function CounterNumber({ children, size, ...props }) {
  return (
    <div
      className={clsx(
        "font-bold inline-flex gap-2 items-baseline",
        size ? "text-5xl md:text-7xl" : "text-2xl md:text-5xl",
        "text-secondary"
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default CounterNumber;
