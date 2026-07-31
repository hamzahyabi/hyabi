import { motion } from "framer-motion";
import { Headset, Laptop, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

interface Role {
  icon: LucideIcon;
  title: string;
  org: string;
  dates: string;
  note?: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    icon: Headset,
    title: "Agent Support Technique & Relation Client",
    org: "IO Solutions — Rogers Communications & Fido Communications, Casablanca",
    dates: "Feb 2026 – Jul 2026",
    bullets: [
      "Managed ~50 client interactions a day (calls + emails) with full case follow-through",
      "Adapted tone and communication style to each interlocutor's profile",
      "Coordinated complex case resolution with internal teams",
      "Maintained 85%+ client satisfaction in a high-volume, high-pressure environment",
    ],
  },
  {
    icon: Laptop,
    title: "Freelance – Client & Technical Support",
    org: "Independent, Casablanca",
    dates: "Oct 2023 – Mar 2024",
    note: "Completed alongside coursework at OSBT and Université Hassan II.",
    bullets: [
      "Managed client relations for 5+ active remote clients",
      "Achieved an 80%+ first-contact resolution rate",
    ],
  },
  {
    icon: Wrench,
    title: "IT Support Technician",
    org: "Independent / freelance work",
    dates: "2024",
    bullets: [
      "Installed, configured, and maintained equipment for business clients",
      "Handled client complaints through to full resolution",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built this skillset"
          description="Most recent first — a mix of high-volume support work and independent freelance projects, several of them running in parallel with school."
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px"
          />

          <ul className="space-y-10">
            {roles.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:grid md:grid-cols-2 md:gap-10"
              >
                <div
                  className={
                    i % 2 === 0
                      ? "md:col-start-1 md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }
                >
                  <div className="hidden md:block">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.org}
                    </p>
                    <Badge
                      variant="outline"
                      className="mt-2 rounded-full border-border/60 bg-background/40 text-xs font-medium"
                    >
                      {r.dates}
                    </Badge>
                    <ul
                      className={
                        i % 2 === 0
                          ? "mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground md:ml-auto md:max-w-md"
                          : "mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground md:max-w-md"
                      }
                    >
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {r.note && (
                      <p className="mt-2 text-xs italic text-muted-foreground/70">
                        {r.note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 md:hidden">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.org}
                    </p>
                    <Badge
                      variant="outline"
                      className="mt-2 rounded-full border-border/60 bg-background/40 text-xs font-medium"
                    >
                      {r.dates}
                    </Badge>
                    <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {r.note && (
                      <p className="mt-2 text-xs italic text-muted-foreground/70">
                        {r.note}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute left-5 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary md:left-1/2 md:block"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
