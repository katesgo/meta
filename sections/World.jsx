'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-{550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[3px] rounded-full bg-[#dba8ff] hover:blur-sm shadow-[#c277f7] shadow-xl">
          <img
          src="people-01.png" alt="people" className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[3px] rounded-full bg-[#dba8ff] hover:blur-sm shadow-[#c277f7] shadow-xl">
          <img
          src="people-02.png" alt="people" className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[3px] rounded-full bg-[#dba8ff] hover:blur-sm shadow-[#c277f7] shadow-xl">
          <img
          src="people-03.png" alt="people" className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-72 left-[18%] w-[140px] h-[90px] p-[3px] rounded-full bg-[#dba8ff] hover:blur-sm shadow-[#c277f7] shadow-xl">
          <img
          src="cardpink.png" alt="card" className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute top-50 right-[19%] w-[140px] h-[90px] p-[3px] rounded-full bg-[#dba8ff] hover:blur-sm shadow-[#c277f7] shadow-xl">
          <img
          src="cardblue.png" alt="card" className="w-full h-full rounded-full"
          />
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default World;
