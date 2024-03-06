import React from "react";
import {
  Navbar,
  Landing,
  Marquee,
  About,
  Eyes,
  Featured,
  Review,
  Cards,
  Project,
  Footer,
} from "./components";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-black bg-[#F1F1F1]">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Cards />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
