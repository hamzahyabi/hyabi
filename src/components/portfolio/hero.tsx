import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Dither from "./dither";

export function Hero() {
  return (
    <section
      id="top"
      className="dark relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4 pt-24 text-foreground"
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.16, 0.32, 0.75]}
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
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Open to IT support, helpdesk & junior dev roles — and freelance web projects
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
          Client Support Specialist
          <span className="mx-2 text-muted-foreground/40">|</span>
          Web & Automation Freelancer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance leading-7 text-muted-foreground"
        >
          I turn high-pressure client interactions into positive outcomes, and I
          build the automation workflows and websites that keep small
          businesses running smoothly. Trilingual, autonomous, and
          remote-work ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="group rounded-full">
            <a href="/Hamza-Hyabi-CV.pdf" download>
              <Download className="mr-1 h-4 w-4" />
              Télécharger mon CV / Download CV
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
              Me contacter / Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-4"
        >
          <a
            href="#community"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            See the community project that proves it
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground/60"
        >
          <span>Client Support</span>
          <span className="h-px w-6 bg-border" />
          <span>Automation</span>
          <span className="h-px w-6 bg-border" />
          <span>Web Design</span>
        </motion.div>
      </div>
    </section>
  );
}
