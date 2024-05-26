import cn from "../utilities/cn";

function CounterWidget({ children, className }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-2 md:gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CounterWidget;
