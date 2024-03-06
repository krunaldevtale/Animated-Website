import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center justify-center px-10">
      <div className="cardsContainer w-1/2 h-[55vh] ">
        <div className="card relative bg-[#004D43] w-full h-full rounded-xl flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-5 bottom-5 border-2 px-3 py-1 rounded-full text-[#CDEA68] border-[#CDEA68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardsContainer w-1/2 h-[55vh] flex gap-5">
        <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute left-5 bottom-5 border-2 px-3 py-1 rounded-full uppercase text-white">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute left-5 bottom-5 border-2 px-3 py-1 rounded-full uppercase text-white">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
