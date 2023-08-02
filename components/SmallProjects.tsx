import React from "react";
import Image from "next/image";
type Props = {};
type TypeProjects = {
  githubLink: string;
  liveLink: string;
  title: string;
  description: string;
  technologies: string[];
};
const SmallProjects = (props: Props) => {
  const projects: TypeProjects[] = [
    {
      githubLink: "",
      liveLink: "",
      title: "Small Project",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. skdfjkss  dolor sit amet consectetur adipisic",
      technologies: ["Html", "CSS", "Javascript"],
    },
    {
      githubLink: "",
      liveLink: "",
      title: "Small Project",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. skdfjkss  dolor sit amet consectetur adipisic",
      technologies: ["Html", "CSS", "Javascript"],
    },
    {
      githubLink: "",
      liveLink: "",
      title: "Small Project",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. skdfjkss  dolor sit amet consectetur adipisic",
      technologies: ["Html", "CSS", "Javascript"],
    },
  ];
  return (
    <div className="mb-[279px]">
      <h2 className="text-center text-[30px] text-[#D9D9D9] font-semibold mb-[14px]">
        Other Noteworthy Projects
      </h2>
      <h3 className="text-[25px] text-primary text-center font-semibold mb-[42px]">
        <a href="">View the archive</a>
      </h3>
      <div className="flex grid grid-cols-3 gap-[33px] lg:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div className="py-[37px] px-[32px] bg-[#112240]">
            <div className="flex justify-between items-center mb-[39px]">
              <a href={project.githubLink}>
                <Image
                  src="/icons/folder-icon.png"
                  alt="Porfolio picture"
                  width={35}
                  height={36}
                />
              </a>
              <a href={project.liveLink}>
                <Image
                  src="/icons/website-icon.png"
                  alt="Porfolio picture"
                  width={35}
                  height={35}
                />
              </a>
            </div>
            <h3 className="text-[25px] font-semibold text-[#A8B2D1] mb-[28px]">
              {project.title}
            </h3>
            <p className="text-[18px] text-[#D9D9D9] mb-[28px]">
              {project.description}
            </p>
            <div className="flex gap-[31px] flex-wrap ">
              {project.technologies.map((technology, index) => (
                <p className="text-[#A8B2D1] text-[18px] font-semibold">
                  {technology}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
