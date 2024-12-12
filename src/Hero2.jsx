import React from "react";
import animation1 from "../src/assets/lotti/animation1.json";
import Lottie from "lottie-react";
import { motion } from "motion/react";

const Hero2 = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero bg-base-200 min-h-screen"
      >
        <div className="hero-content grid grid-cols-2">
          <div>
            <Lottie animationData={animation1}></Lottie>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero2;
