import { motion } from "framer-motion";
import { Workflow, Code as Code2, Lightbulb, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import ProfileCard from "./profile-card";

const highlights = [
  {
    icon: Workflow,
    title: "Automation",
    description: "Building robust n8n workflows that eliminate manual work.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Shipping fast, modern interfaces with clean architecture.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning ambiguous requirements into reliable systems.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always exploring new tools, languages, and patterns.",
  },
];

export function About() {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering practical solutions"
          description="I'm a software engineering student with a strong interest in automation, backend systems, and AI-powered tools. I focus on building practical solutions that save time, optimize workflows, and create real value."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <ProfileCard
              name="Jon"
              title="Software Engineer"
              handle="jon"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/Jons.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled
              behindGlowColor="rgba(96, 165, 250, 0.55)"
              innerGradient="linear-gradient(145deg,#1e3a5f8c 0%,#60a5fa44 100%)"
              onContactClick={handleContact}
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-border hover:bg-card/70 hover:-translate-y-1">
                  <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-foreground/[0.04] to-transparent" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
