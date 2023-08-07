import About from "@/components/About/About";
import Experiances from "@/components/About/Experiances";
import GetInTouch from "@/components/GetInTouch";
import Projects from "@/components/Projects";
import SmallProjects from "@/components/SmallProjects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1400px] px-10 md:px-5 mx-auto pb-[109px]">
      <About />
      <Experiances />
      <Projects />
      <SmallProjects />
      <GetInTouch />
    </main>
  );
}
