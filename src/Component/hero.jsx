import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
function Hero() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border backdrop-blur-lg object-cover bg-gradient-to-b bg-slate-700 from-emerald-100 items-center flex flex-col justify-center gap-5 h-[400px]"
      >
        <h1 className="font-bold text-blue-600 text-sm text-wrap sm:text-4xl">
          WSTUBE PRACTYS PROJECT
        </h1>
        <p className="font-semibold  text-blue-600 text-xs text-wrap sm:text-xl">
          PH-TO-BY-DREEM-COURS AND LEARN,
        </p>
        <h2>
          LEARN
          <ReactTyped
            className="pl-2 font-bold text-amber-500"
            strings={[
              " HTML",
              " CSS",
              " JAVASCRIPT",
              " TAILWIND",
              " REACT JS",
              "...",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
        </h2>
      </motion.div>
    </>
  );
}

export default Hero;
