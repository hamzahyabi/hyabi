import { motion } from "framer-motion";
import { Headset, Code as Code2, Languages, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import ProfileCard from "./profile-card";

const highlights = [
  {
    icon: Headset,
    title: "High-Volume Support",
    description:
      "Handling ~50 client interactions a day by calls and email, with full case follow-through.",
  },
  {
    icon: Languages,
    title: "Trilingual by Default",
    description:
      "Adapting tone and language — Arabic/Darija, French, English — to whoever is on the other end.",
  },
  {
    icon: Code2,
    title: "Web & Automation",
    description:
      "Building the sites and workflows small businesses need, learned by shipping real freelance work.",
  },
  {
    icon: MapPin,
    title: "Remote-Ready",
    description:
      "Based in Casablanca, autonomous by habit, and set up to work with clients anywhere.",
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
          title="Between roles, and building"
          description="I'm currently between roles — I wrapped up my last support position in July 2026 — and using this stretch to grow a freelance web design and automation practice while pursuing my next IT or development role."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Badge variant="outline" className="gap-1.5 rounded-full border-border/60 bg-background/40 px-3 py-1">
            <MapPin className="h-3 w-3" />
            Casablanca, Morocco
          </Badge>
          <Badge variant="outline" className="gap-1.5 rounded-full border-border/60 bg-background/40 px-3 py-1">
            <Languages className="h-3 w-3" />
            Arabic (native) · French (professional) · English (fluent)
          </Badge>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <ProfileCard
              name="Hamza Hyabi"
              title="Client Support & Web Specialist"
              handle="hamzahyabi"
              status="Open to work"
              contactText="Contact Me"
              avatarUrl="/hamza-headshot.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled
              behindGlowColor="rgba(96, 165, 250, 0.55)"
              innerGradient="linear-gradient(145deg,#1e3a5f8c 0%,#60a5fa44 100%)"
              onContactClick={handleContact}
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-balance leading-7 text-muted-foreground"
            >
              I'm a client relations and technical support specialist with
              proven experience handling high-volume interactions — around 50
              a day — across calls and email. I adapt my communication style
              to whoever I'm talking to, technical or not, and I'm known for
              active listening, patience, and turning a frustrating experience
              into a positive one. Outside of support work, I'm autonomous,
              detail-oriented, and fully set up for remote collaboration.
            </motion.p>

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
      </div>
    </section>
  );
}
