import cn from "../utilities/cn";

export default function ButtonRounded({ children, active, ...props }) {
  return (
    <>
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-gray-300 px-4 md:px-6 h-10 text-sm leading-none font-bold text-secondary transition duration-300 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none",
          active && "border-emerald-600 bg-emerald-50 text-emerald-600"
        )}
        {...props}
      >
        <span className="leading-none">{children}</span>
      </button>
    </>
  );
}
