import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2e33b0]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-500 to-blue-900" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-justify  `}>
            Hi, I'm <span className="text-[#3e92cc]">Varshini</span>
          </h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100    `}>
            As a graduate student, I crafted a web application, blending
            academic expertise with practical development skills.
          </p>
          <h1 className={`${styles.heroText} text-white  mt-20 `}>
            Design Beyond Boundaries,{" "}
            <span className="text-[#3e92cc]">Code with Passion</span>
          </h1>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
