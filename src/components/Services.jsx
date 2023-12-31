import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const artists = [
  "Davido",
  "BurnaBoy",
  "CasperNyovest",
  "TiwaSavage",
  "P-Square",
  "Dbanj",
  "Sarkodie",

  "NastyC",
];

const Service = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const fetchScheduleData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setScheduleData(data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };

    fetchScheduleData();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "keyframe", duration: 0.4 },
    },
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const renderImages = () => {
    const images = [
      "/davido.jpg",
      "/burna.jpg",
      "/CasperNyovest.png",
      "/tiwa.webp",
      "/Psquare.jpg",
      "/Dbanj.jpg",
      "/Sarkodie.jpg",

      "/NastyC.png",
    ];

    return images.map((image, index) => (
      <img
        key={index}
        className={`opacity-90 w-full h-auto max-h-[600px] object-cover object-top max-md:mb-20 ${
          selectedItem === index ? "" : "hidden"
        }`}
        src={image}
        alt=""
      />
    ));
  };

  const renderDates = () => {
    if (!scheduleData[selectedItem]) return null;

    const dates = scheduleData[selectedItem].dates;

    return (
      <div className="md:absolute bottom-2 flex items-start justify-around w-full text-neutral-100 max-md:grid grid-cols-2 max-md:gap-6">
        {dates.map((date, index) => (
          <div key={index} className="text-white">
            <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4">
              {date.month}
            </h1>
            <ul className="lg:space-y-4 space-y-2">
              {date.events.map((event, i) => (
                <li
                  key={i}
                  className="flex flex-row items-center lg:space-x-5 space-x-2"
                >
                  <h2 className="lg:text-3xl text-xl">{event.day}</h2>
                  <div className="max-md:text-sm">
                    <h3>{event.location}</h3>
                    {event.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className="mt-20"
    >
      <motion.div variants={item}>
        <h1 className="lg:text-7xl text-4xl text-center mb-6">Schedule</h1>
        <p className="lg:text-2xl text-base  text-center w-6/12 max-md:w-10/12 mx-auto text-neutral-400">
          Discover the schedule of your favourite idols and support them at an
          incredibly grand concert
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="mt-24 lg:text-2xl text-base overflow-x-scroll"
      >
        <ul className="flex items-center justify-center text-base md:text-2xl uppercase space-x-7 whitespace-nowrap scrollbar-hide text-neutral-500 ">
          {Array.from({ length: 10 }, (_, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`${
                selectedItem === index
                  ? "scale-125 text-yellow-600 shadow-2xl"
                  : ""
              } transition-all ease-in duration-150 cursor-pointer`}
            >
              {artists[index]}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div variants={item} className="mt-24">
        <div className="relative md:bg-gradient-to-tl from-black to-white z-10">
          {renderImages()}
          {renderDates()}
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="flex items-baseline mt-32 justify-center"
      >
        <button className="px-5 py-2 border-2 hover:bg-white hover:text-black transition-all ease-in duration-200">
          See More
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Service;
