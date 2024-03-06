import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text text-white border-t-2 border-b-2 border-zinc-500 flex overflow-hidden whitespace-nowrap tracking-tighter">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-['Neue_Montreal'] font-extrabold uppercase mb-8 pt-5 pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-['Neue_Montreal'] font-extrabold uppercase mb-8 pt-5 pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
