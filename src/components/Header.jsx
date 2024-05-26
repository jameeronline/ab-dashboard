function Header() {
  return (
    <header className=" bg-primary text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-1 py-10 pb-14 md:py-20 md:pb-28 md:gap-2">
          <h1 className="text-3xl font-bold md:text-5xl">أبشر بالأرقام</h1>
          <p className="text-base opacity-70 md:text-2xl">
            إحصائيات المستخدمين على مر السنين
          </p>
        </div>
      </div>
      <div className="bg-primary absolute inset-0 right-1/2 bg-mesh-pattern bg-repeat-x bg-60 bg-right-bottom z-[1]"></div>
    </header>
  );
}

export default Header;
