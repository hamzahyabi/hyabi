import { motion } from "framer-motion";
import { Users, ShieldCheck, ClipboardList, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const responsibilities = [
  {
    icon: Users,
    title: "Grew the community from scratch",
    description:
      "Built an active Discord community up to 4,000+ members over four years, organically.",
  },
  {
    icon: ShieldCheck,
    title: "Led a remote volunteer team",
    description:
      "Recruited and managed a staff team across roles, task tracking, and conflict resolution — unpaid, and still showing up.",
  },
  {
    icon: MessagesSquare,
    title: "Owned day-to-day member support",
    description:
      "Handled daily member support and engagement, the same patient, high-volume communication I bring to client-facing work.",
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Running a 4,000-member community since 2022"
          description="Long before it was a job, I was already doing the work: growing a community, leading a remote team, and handling support at scale — for free, because I wanted to build something well."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="relative flex h-full flex-col items-center justify-center overflow-hidden border-border/60 bg-card/40 p-10 text-center backdrop-blur-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
              />
              <Badge
                variant="outline"
                className="rounded-full border-border/60 bg-background/40 text-xs"
              >
                Discord Community · 2022 – Present
              </Badge>
              <p className="mt-6 text-6xl font-extrabold tracking-tight text-primary sm:text-7xl">
                4,000+
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Members managed
              </p>
              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                Community Manager & Staff Manager — independent, self-directed,
                and still active today.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 lg:col-span-3">
            {responsibilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="group relative flex h-full items-start gap-4 overflow-hidden border-border/60 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/70">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/50">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
            <div className="flex items-start gap-2 rounded-xl border border-dashed border-border/60 bg-background/30 p-4">
              <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-xs leading-5 text-muted-foreground">
                This is the same operating pattern behind every client
                relationship: listen, take ownership, and follow through
                until it's resolved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
