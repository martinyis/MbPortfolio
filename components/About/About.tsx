"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="mt-[73px] flex justify-between gap-[20px] md:gap-[10px] md:flex-col  md:items-center mb-[200px]">
      <div>
        <h2 className="text-primary text-[25px] font-light mb-[10px] md:text-[18px]">
          <Typewriter
            options={{
              strings: ["Hi, my name is"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h1 className="text-[60px] md:text-[40px] text-text-title font-bold">
          Stanislav Martin Babak
        </h1>
        <p className="text-secondary text-[23px] md:text-[18px] max-w-[736px] mb-[92px] md:mb-[20px]">
          I'm a Software Engineer studying at the University of New Hampshire,
          passionate about creating innovative applications. Currently, I'm
          focused on building full-stack projects using MERN and Next.js for a
          well-rounded development experience.
        </p>
        {/* <button className="py-[12px] px-[93px] md:py-[6px] md:px-[41px] sm:py-[4px] sm:px-[20px] text-primary text-[23px] border-[1px] border-primary rounded-[10px] mb-[33px]">
          Check my resume
        </button> */}
      </div>
      <div className="max-w-[363px] max-h-[311px] relative">
        <Image
          src="/new-avatar.png"
          alt="Porfolio picture"
          width={363}
          height={311}
          className="rounded-[10px]"
        />
        {/* <div className="absolute  w-[95%] h-[105%] bottom-[-82px] right-[-34px] border border-primary rounded-[10px] -z-10"></div> */}
      </div>
    </div>
  );
};

export default About;
