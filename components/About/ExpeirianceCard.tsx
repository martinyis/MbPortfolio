import React from "react";
import { TypeExpreiance } from "@/data/expriances";

const ExpeirianceCard = (props: TypeExpreiance) => {
  const { date, role, company, description } = props;
  return (
    <div className="p-[32px] bg-[#233554] rounded-[12px]">
      <p className="text-[20px] text-white">{date}</p>
      <h2 className="text-primary text-[26px] font-bold">{role}</h2>
      <p className="text-[16px] text-white font-bold mb-[16px]">{company}</p>
      <p className="text-[16px] text-[#D9D9D9]">{description}</p>
    </div>
  );
};

export default ExpeirianceCard;
