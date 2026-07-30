import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";

const milestones = [
  {
    icon: GraduationCap,
    title: "Software Engineering Student",
    description:
      "Deepening my foundation in algorithms, systems, and software architecture.",
  },
  {
    icon: BookOpen,
    title: "International Economics Student",
    description:
      "Built a strong analytical lens for understanding systems, markets, and real-world problems.",
  },
  {
    icon: Rocket,
    title: "Self-taught Builder",
    description:
      "Shipping automation workflows, backend systems, and web apps through continuous hands-on practice.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & background"
          description="A path shaped by curiosity across engineering, economics, and independent building."
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px"
          />

          <ul className="space-y-10">
            {milestones.map((m, i) => (
              <motion.li
                key={m.title}
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
                      <m.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:hidden">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute left-5 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-foreground md:left-1/2 md:block"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
