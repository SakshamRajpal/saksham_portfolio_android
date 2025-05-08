import { motion } from "framer-motion";
import { styles } from "../styles";
import photo from '../assets/photo.png';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center">
      <div
        className={`relative max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-10 sm:mb-0`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div className="text-center sm:text-left">
          <h1 className={`${styles.heroHeadText} text-white text-4xl sm:text-6xl`}>
            Hey, I'm <span className="text-[#915EFF]">Saksham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-base sm:text-lg`}>
            Computer Science major at MAIT. <br className="sm:block hidden" />
            Interested in user-friendly interfaces and full-stack web development.
          </p>
        </div>
      </div>

      <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mt-8 sm:mt-0 rounded-full bg-[#1a1a1a] border-4 border-[#915EFF] flex justify-center items-center">
        <img
          src={photo}
          className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover object-top"
          alt="Profile"
        />
      </div>

      <div className="relative mt-8 sm:mt-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#4A4A4A] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
