import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

interface EduItem {
  icon: LucideIcon;
  title: string;
  org: string;
  dates: string;
  kind: "Education" | "Certification";
}

const items: EduItem[] = [
  {
    icon: GraduationCap,
    title: "Technicien Spécialisé en Développement Informatique",
    org: "OMNIA School of Business and Technology (OSBT)",
    dates: "2024 – 2026",
    kind: "Education",
  },
  {
    icon: BookOpen,
    title: "Licence Économie Internationale (L2)",
    org: "Université Hassan II",
    dates: "2024 – 2025",
    kind: "Education",
  },
  {
    icon: School,
    title: "Baccalauréat Sciences Économiques",
    org: "GS Errahma",
    dates: "2023 – 2024",
    kind: "Education",
  },
  {
    icon: Award,
    title: "Introduction aux Réseaux: Cisco Packet Tracer",
    org: "Cisco Networking Academy",
    dates: "2026",
    kind: "Certification",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="A technical and analytical foundation"
          description="Pursued technical certification and economics studies in parallel while building freelance experience — the overlapping dates below aren't an error."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-border hover:bg-card/70">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <Badge
                    variant="outline"
                    className="rounded-full border-border/60 bg-background/40 text-xs"
                  >
                    {item.kind}
                  </Badge>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                  {item.dates}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
