import clsx from "clsx";

export default function ButtonRounded({ children, active }) {
  return (
    <>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-gray-300 px-6 py-2 text-base font-medium tracking-wide text-secondary transition duration-300 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
        <span>{children}</span>
      </button>
    </>
  );
}
