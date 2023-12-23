"use client";
import React from "react";
import animation from "./../data.json";
type Props = {};

const GetInTouch = (props: Props) => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  };
  return (
    <section id="contact" className="">
      <div></div>
      <h2 className="text-[60px] font-semibold text-center text-[#D9D9D9] pb-[59px] sm:text-[40px] xs:text-[20px]">
        Get In Touch
      </h2>
      <p className="max-w-[1129px] text-[20px] text-center mx-auto text-white pb-[30px] sm:text-[16px]">
        Although I am currently looking for new internship opportunities, my
        inbox is always open.
      </p>
      <form
        method="post"
        action="mailto:martinyis11@gmail.com"
        className="text-center"
      >
        <button className="text-[23px] text-[#112240] font-bold py-[12px] px-[120px] sm:py-[6px] sm:px-[60px] bg-[#64FFDA] rounded-[10px]">
          Say Hello
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
