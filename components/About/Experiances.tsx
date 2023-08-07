import React from "react";
import { experiances } from "@/data/expriances";
import ExpeirianceCard from "./ExpeirianceCard";
type Props = {};

const Experiances = (props: Props) => {
  return (
    <section id="experiance" className="mb-[200px] mx-auto ">
      <h2 className="text-[42px] font-bold text-white mb-[24px]">
        My <span className="text-primary">Experiences</span>
      </h2>
      <p className="text-[16px] text-[#9CA3AF] max-w-[730px] mb-[80px]"></p>
      <div className="grid grid-cols-3 gap-[29px] md:grid-cols-2 sm:grid-cols-1">
        {experiances.map((experiance, id) => (
          <ExpeirianceCard {...experiance} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Experiances;
