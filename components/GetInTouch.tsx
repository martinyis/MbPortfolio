import React from "react";

type Props = {};

const GetInTouch = (props: Props) => {
  return (
    <section id="contact" className="">
      <h2 className="text-[60px] font-semibold text-center text-[#D9D9D9] pb-[59px] sm:text-[40px] xs:text-[20px]">
        Get In Touch
      </h2>
      <p className="max-w-[1129px] text-[20px] text-center mx-auto text-white pb-[30px] sm:text-[16px]">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
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
