import React from "react";
import Image from "next/image";
type TypeProjects = {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
};

const Projects = () => {
  const projects: TypeProjects[] = [
    {
      image: "/moviesensei.png",
      title: "Movie Sensei",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis labore maiores quisquam obcaecati praesentium impedit aliquam magni alias ea quidem vero ratione, corporis eveniet est? Minus porro dignissimos sequi.",
      githubLink: "https://github.com/martinyis/MovieSensei",
      liveLink: "https://movie-sensei.vercel.app/",
    },
    {
      image: "/repoappidea.png",
      title: "RepoAppIdea",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis labore maiores quisquam obcaecati praesentium impedit aliquam magni alias ea quidem vero ratione, corporis eveniet est? Minus porro dignissimos sequi.",
      githubLink: "https://github.com/martinyis/RepoAppIdea",
      liveLink: "https://repo-app-idea.vercel.app/",
    },
  ];
  return (
    <div className="mb-[200px] flex flex-col gap-[20px]">
      <div className="flex items-center gap-[10px] mb-[71px]">
        <h2 className="text-[30px] font-semibold text-[#D9D9D9]">
          Some Things I’ve built
        </h2>
        <div className="h-[1px] w-[70%] bg-[#A8B2D1]"></div>
      </div>
      {projects.map((project, index) => {
        return (
          <div className="flex md:flex-col items-center gap-[20px] bg-[#233554] pl-[18px] pr-[24px] pt-[58px] max-w-[1002px] mx-auto pb-[45px] rounded-tl-0 rounded-tr-[55px] rounded-br-0 rounded-bl-[55px]">
            <div className="">
              <Image
                src={project.image}
                alt="Porfolio picture"
                width={490}
                height={247}
              ></Image>
            </div>
            <div>
              <h1 className="text-[30px] font-bold mb-[10px] max-w-[450px]">
                {project.title}
              </h1>
              <p className="text-[18px] max-w-[450px] mb-[17px]">
                {project.description}
              </p>
              <div className="flex items-center gap-[20px]">
                <a href={project.githubLink}>
                  <Image
                    src="/icons/github-project-icon.png"
                    alt="Github icon"
                    width={27}
                    height={27}
                  />
                </a>
                <a href={project.liveLink}>
                  <Image
                    src="/icons/open-project-icon.png"
                    alt="Live icon"
                    width={27}
                    height={27}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
