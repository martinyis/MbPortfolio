import React from "react";
import { TypeExpreiance } from "@/data/expriances";
import Link from "next/link";
const ExpeirianceCard = (props: TypeExpreiance) => {
  const { date, role, company, description, companyLink } = props;
  return (
    <div className="p-[32px] bg-[#233554] rounded-[12px]">
      <p className="text-[20px] text-white">{date}</p>
      <h2 className="text-primary text-[26px] font-bold">{role}</h2>
      <Link href={`${companyLink}`} target="_blank">
        <p className="text-[16px] text-white font-bold mb-[16px] hover:text-primary">
          {company}
        </p>
      </Link>
      <p className="text-[16px] text-[#D9D9D9]">{description}</p>
    </div>
  );
};

export default ExpeirianceCard;
