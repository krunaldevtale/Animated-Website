import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className='px-16 font-["Neue_Montreal"] text-[4vw] tracking-tight leading-[4vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-14 border-zinc-500 font-['Neue_Montreal'] flex justify-between px-16 py-10">
        <div className="w-1/4">
          <p>What you can expect:</p>
        </div>
        <div className="flex flex-col gap-10 w-72">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex flex-col gap-10 justify-end w-40">
          <div>
            <p>S:</p>
          </div>
          <div className="flex flex-col">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Linkdin</a>
          </div>
        </div>
      </div>
      <div className=" flex gap-5 w-full border-t-[1px] border-zinc-500 mt-10 px-16 py-5">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="uppercase px-10 py-4 bg-zinc-900 rounded-full text-white mt-5 flex items-center justify-center gap-5">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
