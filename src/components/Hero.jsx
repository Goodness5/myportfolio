import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp, FaFilePdf } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#28f7ec]" />
          <div className="w-1 sm:h-80 h-40 green-pink-gradient" />
        </div>
        <div className="m-auto items-center w-full">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#d4bbec]">Goodness</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop websites and smart contracts
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* <a href="#about">
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
        </a> */}
      </div>
      <div class="socials bg-black z-50 justify-between flex flex-col fixed bottom-0 right-0">
  <ul class="flex flex-row">
    <li class="text-white hover:text-[#7375f8] text-2xl p-2 md:p-4 font-extrabold cursor-pointer">
      <a href="https://twitter.com/goodnesskolapo" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </li>

    <li class="text-white hover:text-[#7375f8] text-2xl p-2 md:p-4 font-extrabold cursor-pointer">
      <a href="https://www.linkedin.com/in/goodness-temilorun" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </li>

    <li class="text-white hover:text-[#7375f8] text-2xl p-2 md:p-4 font-extrabold cursor-pointer">
      <a href="mailto:goodnesskolapo@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
    </li>

    <li class="text-white hover:text-[#7375f8] text-2xl p-2 md:p-4 font-extrabold cursor-pointer">
      <a href="https://wa.me/2347080738071" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </li>
    <li class="text-white hover:text-[#7375f8] text-2xl p-2 md:p-4 font-extrabold cursor-pointer">
      <a href="https://github.com/Goodness5/myportfolio/blob/master/README.md" target="_blank" rel="noopener noreferrer">
        <FaFilePdf />
      </a>
    </li>
  </ul>
</div>
    </section>
  );
};

export default Hero;
