function Header() {
  return (
    <header className=" bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-1 py-10 pb-20 md:py-20 md:pb-28 md:gap-2">
          <h1 className="text-3xl font-bold md:text-5xl">Absher Statistics</h1>
          <p className="text-base opacity-70 md:text-2xl">
            User statistics over the years
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
