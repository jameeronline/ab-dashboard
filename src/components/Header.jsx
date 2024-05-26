import { motion } from "framer-motion";

function Header() {
  return (
    <header className=" bg-primary text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-1 py-10 pb-14 md:py-20 md:pb-28 md:gap-2">
          <motion.h1
            className="text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            أبشر بالأرقام
          </motion.h1>
          <motion.p
            className="text-base opacity-70 md:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            إحصائيات المستخدمين على مر السنين
          </motion.p>
        </div>
      </div>
      <div className="bg-primary absolute inset-0 md:right-1/2 bg-mesh-pattern opacity-40 md:opacity-0 bg-repeat-x bg-60 bg-right-bottom z-[1]"></div>
    </header>
  );
}

export default Header;
