import About from "@/components/About/About";
import Experiances from "@/components/About/Experiances";
import Projects from "@/components/Projects";
import SmallProjects from "@/components/SmallProjects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1400px] px-10 md:px-5 mx-auto">
      <About />
      <Experiances />
      <Projects />
      <SmallProjects />
    </main>
  );
}
