import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full h-screen bg-[#F1F1F1] pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex  overflow-hidden font-['Neue_Montreal']">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.5vw] relative top-[0.5vw] "
                  >
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src="
https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    ></img>
                  </motion.div>
                )}
                <h1 className="uppercase leading-[6.5vw] tracking-tighter font-black text-[7.5vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-semibold tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-normal text-md uppercase rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
