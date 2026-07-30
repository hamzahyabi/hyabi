import { motion } from "framer-motion";
import { Code, Wrench, Workflow, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const categories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: ["Next.js", "Tailwind CSS", "Shadcn UI", "Node.js"],
  },
  {
    icon: Workflow,
    title: "Automation & Backend",
    skills: ["n8n", "API Integrations", "Webhooks", "MySQL"],
  },
  {
    icon: Package,
    title: "Other",
    skills: ["Git & GitHub", "REST APIs", "Debugging", "Optimization"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build"
          description="A curated stack of languages, frameworks, and tools I rely on to ship production-ready work."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-border hover:bg-card/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                    <cat.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
