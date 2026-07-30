import { motion } from "framer-motion";
import { ExternalLink, Brain, Workflow, Globe, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon } from "./icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

interface Project {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  demo?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "AI Facial Expression Detector",
    description:
      "Detects emotions like stress or deception from video input using computer vision and trained models.",
    stack: ["Python", "OpenCV", "AI Models"],
    icon: Brain,
    github: "https://github.com/HamzaHyabi",
  },
  {
    title: "Automation Workflows (n8n)",
    description:
      "Automated business processes including data sync, notifications, and API integrations to cut manual work.",
    stack: ["n8n", "Webhooks", "APIs"],
    icon: Workflow,
    github: "https://github.com/HamzaHyabi",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built with a focus on performance, animation, and premium design.",
    stack: ["Next.js", "Tailwind", "Shadcn UI"],
    icon: Globe,
    github: "https://github.com/HamzaHyabi",
  },
  {
    title: "IPTV Panel",
    description:
      "Frontend and backend system for managing users, subscriptions, and streaming access.",
    stack: ["Node.js", "MySQL", "REST API"],
    icon: Tv,
    github: "https://github.com/HamzaHyabi",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of AI, automation, and web projects that represent what I enjoy building."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-border hover:bg-card/70 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-foreground/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/50">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="flex gap-1.5">
                    {p.github && (
                      <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                      >
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {p.demo && (
                      <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                      >
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      className="rounded-full border-border/60 bg-background/40 text-xs"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2">
                  {p.demo && (
                    <Button asChild size="sm" className="rounded-full">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {p.github && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full border-border/60 bg-background/40"
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-1 h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
