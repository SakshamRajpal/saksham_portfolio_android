import { motion } from "framer-motion";
import { styles } from "../styles";
import photo from '../assets/photo.png';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#915EFF]'>Saksham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computer Science major at MAIT. <br className='sm:block hidden' />
            Interested in user-friendly interfaces and full-stack web development.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-20 bottom-40 w-full flex justify-center items-center'>
        <div className='w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#1a1a1a] border-4 border-[#915EFF] flex justify-center items-center'>
          <img
            src={photo}
            className='w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover object-top'
            alt="Profile"
          />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#4A4A4A] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#915EFF] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
