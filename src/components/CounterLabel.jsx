import clsx from "clsx";

function CounterLabel({ children, type }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2",
        type ? "text-emerald-500 text-sm font-bold" : "text-accent"
      )}
    >
      {children}
    </div>
  );
}

export default CounterLabel;
