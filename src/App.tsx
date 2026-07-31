import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Community } from "@/components/portfolio/community";
import { Skills } from "@/components/portfolio/skills";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export function App() {
  return (
    <div className="relative min-h-svh bg-background text-foreground scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Community />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
