import { About } from "@/sections/About";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";
import { Experience } from "@/sections/Experience";
import { Stack } from "@/sections/Stack";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <Tape />
      <Experience />
      <About />
      <CallToAction />
      <Footer />
    </main>
  );
}
