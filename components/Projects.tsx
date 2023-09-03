"use client";
import React from "react";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
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
        "I launched MovieSensei a SAAS platform powered by React.js, and Tailwind on the front-end, and Node.js, Express.js, and MongoDB on the backend. With the OpenAI API and OMDBAPI integration, accurate movie recommendations thrive. OAuth 2.0 ensures secure authentication, MongoDB safeguards user data, and AWS hosting guarantees a smooth user experience. Explore on GitHub or live here.",
      githubLink: "https://github.com/martinyis/MovieSensei",
      liveLink: "https://movie-sensei.vercel.app/",
    },
    {
      image: "/repoappidea.png",
      title: "RepoAppIdea",
      description:
        "I created RepoAppIdea a robust MERN stack platform (React.js, Node.js, Express.js, MongoDB) that empowers GitHub users to share projects and profiles seamlessly. I established secure user authentication using JWT and OAuth 2.0, managed a collaborative team of 20 contributors, and garnered widespread interest with 35+ forks.",
      githubLink: "https://github.com/martinyis/RepoAppIdea",
      liveLink: "https://repo-app-idea.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="mb-[200px] flex flex-col gap-[20px]">
      <div className="flex items-center gap-[10px] mb-[71px]">
        <h2 className="text-[30px] font-semibold text-[#D9D9D9]">
          Some Things I’ve built
        </h2>
        <div className="h-[1px] w-[70%] bg-[#A8B2D1]"></div>
      </div>
      {projects.map((project, index) => {
        let isEven = index % 2 === 0;
        return (
          <Slide direction={isEven ? "left" : "right"} triggerOnce={true}>
            <div className="flex md:flex-col items-center gap-[20px] bg-[#233554] pl-[18px] pr-[24px] pt-[58px] max-w-[1002px] mx-auto pb-[45px] rounded-tl-0 rounded-tr-[55px] rounded-br-0 rounded-bl-[55px]">
              <Link
                href={project.liveLink}
                target="_blank"
                className="hover:scale-[1.10]"
                style={{
                  //ad some transtion
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Image
                  src={project.image}
                  alt="Porfolio picture"
                  width={490}
                  height={247}
                ></Image>
              </Link>
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
          </Slide>
        );
      })}
    </section>
  );
};

export default Projects;
