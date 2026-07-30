import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Dither from "./dither";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-24"
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.19215686274509805, 0.20392156862745098, 0.5803921568627451]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4.2}
          waveAmplitude={0.37}
          waveFrequency={3}
          waveSpeed={0.05}
          pixelSize={2}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="gap-1.5 rounded-full border-border/60 bg-background/40 px-3 py-1 backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3" />
            <span className="text-xs font-medium text-muted-foreground">
              Available for new projects
            </span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 scroll-m-20 text-5xl font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          Hamza Hyabi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl"
        >
          Software Engineering Student
          <span className="mx-2 text-muted-foreground/40">|</span>
          Automation & AI Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance leading-7 text-muted-foreground"
        >
          I build systems, automation workflows, and modern web experiences
          that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="group rounded-full">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border/60 bg-background/40 backdrop-blur-md"
          >
            <a href="#contact">
              <Mail className="mr-1 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground/60"
        >
          <span>Automation</span>
          <span className="h-px w-6 bg-border" />
          <span>Backend</span>
          <span className="h-px w-6 bg-border" />
          <span>AI</span>
        </motion.div>
      </div>
    </section>
  );
}
