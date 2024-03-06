import React, { useState } from "react";
import { motion } from "framer-motion";

function Featured() {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-10 pb-12 border-b-[2px] border-zinc-300">
        <h1 className="font-[Neue_Montreal] text-6xl tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-10 mt-14">
        <div className="cards w-full flex gap-10">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
              <p>FYDE</p>
            </div>
            <div
              className="cardContainer relative w-full h-[80vh] mt-5"
            >
              <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-8xl font-[Neue_Montreal] z-[9] tracking-tighter">
                {"FYDE".split().map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hover ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.6,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-lg overflow-hidden ">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                />
              </div>
            </div>
            <div className="buttons py-4">
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal]">
                AUDIT
              </button>
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal] mx-2">
                COPYWRITING
              </button>
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal]">
                SALES DECK
              </button>
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal] mx-2">
                SLIDES DESIGN
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
              <p>VISE</p>
            </div>
            <div
              className="cardContainer w-full h-[80vh] mt-5 relative "
            >
              <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-8xl font-[Neue_Montreal] z-[9] tracking-tighter">
                {"VISE".split().map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hover ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.6,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="cards w-full h-full bg-green-700 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                />
              </div>
            </div>
            <div className="buttons py-4">
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal]">
                AGENCY
              </button>
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal] mx-2">
                COMPANY PRESENTATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 mt-14">
        <div className="cards w-full flex gap-10">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
              <p>TRAWA</p>
            </div>
            <div className="cardContainer relative w-full h-[80vh] mt-5">
              <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-8xl font-[Neue_Montreal] z-[9] tracking-tighter">
                {"TRAWA".split().map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hover ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.6,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-lg overflow-hidden ">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                />
              </div>
            </div>
            <div className="buttons py-4">
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal]">
                BRAND IDENTITY
              </button>
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal] mx-2">
                DESIGN RESEARCH
              </button>
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal]">
                INVESTOR DECK
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
              <p>PREMIUM BLEND</p>
            </div>
            <div className="cardContainer w-full h-[80vh] mt-5 relative ">
              <h1 className="absolute flex overflow-hidden right-full w-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-8xl font-[Neue_Montreal] z-[9] tracking-tighter">
                {"PREMIUM BLEND".split().map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hover ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.6,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="cards w-full h-full bg-green-700 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                />
              </div>
            </div>
            <div className="buttons py-4">
              <button className="px-3 py-1 border-2 rounded-full border-zinc-500 font-[Neue_Montreal]">
                BRANDED TEMPLATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
