import React from "react";
import redvelt from "../assets/images/redvelvet.jpg";
import blackpink from "../assets/images/blackpink.jpg";

import twice from "../assets/images/twice.jpg";
import { motion } from "framer-motion";

const Groove = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe", duration: 0.4 } },
  };

  const image = {
    hidden: { opacity: 0, scale: 1.1, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "keyframe", duration: 0.4 },
    },
  };

  return (
    <div>
      <div className="mt-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="md:grid grid-cols-2 gap-x-7 space-y-10"
        >
          <motion.img
            variants={image}
            whileInView="show"
            src="./wizkid.jpg"
            alt=""
          />
          <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center font-extrabold">
            ELEGANT
          </div>
          <motion.div variants={item}>
            <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl">WIZ-KID</h1>
            <p className="text-2xl text-neutral-500 max-sm:text-xl">
              SM Entertainment
            </p>
            <p className="text-neutral-500 mt-3 max-sm:text-sm">
              Red Velvet is a south korean girl group formed by SM
              entertainments in 2014 and consists of five member, namely Irene,
              Seulgi, Wendy, Yeri and Joy. They started their career n August 1,
              2014 with the release f the digital single &apos;Happiness&apos;
            </p>
            <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
              Show more
            </button>
          </motion.div>
          <motion.img
            variants={image}
            className="md:mt-[40px]"
            src="./BlackSherf.jpeg"
            alt=""
          />
          <div className="text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold">
            EVENTS
          </div>
          <motion.div variants={item}>
            <h1 className="text-4xl mt-7 mb-4 max-sm:text-3xl">BLACK SHERiF</h1>
            <p className="text-2xl text-neutral-500 max-sm:text-xl">
              SM Entertainment
            </p>
            <p className="text-neutral-500 mt-3 max-sm:text-sm">
              Red Velvet is a south korean girl group formed by SM
              entertainments in 2014 and consists of five member, namely Irene,
              Seulgi, Wendy, Yeri and Joy. They started their career n August 1,
              2014 with the release f the digital single &apos;Happiness&apos;
            </p>
            <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
              Show more
            </button>
          </motion.div>
          <motion.img
            variants={image}
            className="md:mt-[-100px] opacity-80"
            src="./ShattaWale.jpeg"
            alt=""
          />
          <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center justify-center font-extrabold">
            ELEGANT EVENTS
          </div>
          <motion.div variants={item}>
            <h1 className=" text-4xl mt-7 mb-4 max-sm:text-3xl">SHATTA-WALE</h1>
            <p className="text-2xl text-neutral-500 max-sm:text-xl">
              SM Entertainment
            </p>
            <p className="text-neutral-500 mt-3 max-sm:text-sm">
              Red Velvet is a south korean girl group formed by SM
              entertainments in 2014 and consists of five member, namely Irene,
              Seulgi, Wendy, Yeri and Joy. They started their career n August 1,
              2014 with the release f the digital single &apos;Happiness&apos;
            </p>
            <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
              Show more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Groove;
