import React, { useEffect, useState } from "react";

function Project() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="Project w-full h-screen bg-[#CDEA68]"
    >
      <div className="w-full h-full relative">
        <div className="w-full h-[25vw] text-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className="uppercase leading-[9vw] tracking-tighter font-bold text-[12vw]">
            Ready
          </h1>
          <h1 className="uppercase leading-[9vw] tracking-tighter font-bold text-[12vw]">
            To Start
          </h1>
          <h1 className="uppercase leading-[9vw] tracking-tighter font-bold text-[12vw]">
            The Project?
          </h1>
        </div>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[10vw] h-[10vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                Play
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[10vw] h-[10vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
