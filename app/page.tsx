import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import WorkExperience from "@/components/work-experience"
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact-me";
import Link from "next/link";
import heroPicture from '../public/profile-picture.png' ;
import Image from "next/image";



export default function Home() {
  return (
    <main>
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[lightblue]/80">
      <Header/>
    <section id="hero" className="snap-center">
      <Hero/>
    </section>

    <section id="about" className="snap-center">
      <About/>
    </section>

    <section id="experience" className="snap-center">
      <WorkExperience/>
    </section>

    <section id="skills" className="snap-start" >
      <Skills/>
    </section>

    <section id="projects" className="snap-start">
      <Projects/>
    </section>

      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>
      <Link href='#hero'>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Image src={heroPicture} alt="this is a footer image" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/>
        </div>
      </footer>
      </Link>

    </div>
    </main>
  );
}
