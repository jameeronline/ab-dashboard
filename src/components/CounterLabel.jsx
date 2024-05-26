import cn from "../utilities/cn";

function CounterLabel({ children, type, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center leading-none text-center gap-2",
        type ? "text-emerald-500 text-xs md:text-sm font-bold" : "text-accent",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CounterLabel;
