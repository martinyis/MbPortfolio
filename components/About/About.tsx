import React from "react";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="mt-[73px] flex justify-between gap-[20px] md:gap-[10px] md:flex-col  md:items-center">
      <div>
        <h2 className="text-primary text-[25px] font-light mb-[10px] md:text-[18px]">
          Hi, my name is
        </h2>
        <h1 className="text-[60px] md:text-[40px] text-text-title font-bold">
          Martin Babak
        </h1>
        <p className="text-secondary text-[23px] md:text-[18px] max-w-[736px] mb-[92px] md:mb-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis
          labore maiores quisquam obcaecati praesentium impedit aliquam magni
          alias ea quidem vero ratione, corporis eveniet est? Minus porro
          dignissimos sequi.
        </p>
        <button></button>
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
