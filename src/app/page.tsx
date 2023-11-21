import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-divider";
import Skills from "@/components/Skills";
import Cta from "@/components/Cta";
import {
  InfiniteMovingCards,
  InfiniteMovingCardsPreview,
} from "@/components/InfiniteMovingCards";
import Partner from "@/components/Partner";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Partner />
      <Projects />
      <InfiniteMovingCardsPreview />
      <Skills />
      <Cta />
    </main>
  );
}
