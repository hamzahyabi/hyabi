import { motion } from "framer-motion";
import { Headset, HeartHandshake, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const technicalSkills = [
  "Multichannel Client Support",
  "Case Management",
  "Appointment Scheduling (Google Calendar)",
  "Personalized Client Follow-up",
  "Maestro ICM / Citrix Workspace",
  "AnyDesk",
  "Microsoft Office",
  "Canva / Figma",
];

const personalSkills = [
  "Active Listening",
  "Patience & Empathy",
  "Stress Management",
  "Organizational Skills",
  "Autonomous Work",
  "Attention to Detail",
];

const buildingWith = [
  "Ubuntu VPS / Nginx / PM2 / SSL",
  "PHP / Laravel",
  "Lovable & no-code app building",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          description="Support skills sharpened across ~50 daily interactions, paired with the personal traits that make them work."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-border hover:bg-card/70">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                  <Headset className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Technical Skills
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-border hover:bg-card/70">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                  <HeartHandshake className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Personal Skills
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {personalSkills.map((skill) => (
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6"
        >
          <Card className="border-dashed border-border/60 bg-background/30 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                <Globe className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                Also building with
              </h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {buildingWith.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-full border-border/60 bg-background/40 px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
