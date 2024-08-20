import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Blogs />
      <Contact />
    </div>
  )
}