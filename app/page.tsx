import About from "@/components/About/About";
import Experiances from "@/components/About/Experiances";
import GetInTouch from "@/components/GetInTouch";
import Projects from "@/components/Projects";
import SmallProjects from "@/components/SmallProjects";
import Image from "next/image";
import Link from "next/link";
const images = [
  { path: "/icons/github.png", link: "https://github.com/martinyis" },
  {
    path: "/icons/linkedin.png",
    link: "https://www.linkedin.com/in/stanislav-babak-116850244/",
  },
];
export default function Home() {
  return (
    <main className="max-w-[1400px] px-10 md:px-5 mx-auto pb-[109px]">
      h1
      <About />
      <Experiances />
      <Projects />
      <SmallProjects />
      <GetInTouch />
      <div className="flex justify-center items-center gap-[16px] mt-[100px]">
        {images.map((image, index) => {
          return (
            <Link href={image.link} target="_blank">
              <Image
                src={image.path}
                alt="Github icon"
                width={27}
                height={27}
                key={index}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
