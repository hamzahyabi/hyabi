import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "./section-heading";

const CONTACT_EMAIL = "hamza.hyabi@hotmail.com";

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: "+212 621162904",
    href: "tel:+212621162904",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Casablanca, Morocco",
    href: undefined,
  },
];

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/hamzahyabi/", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/HamzaHyabi", label: "GitHub" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Opening your email app — send when you're ready.");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have an idea, a project, or a role in mind? I'd love to hear from you."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-border/60 bg-card/40 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                Reach out directly
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I reply to most messages within 24 hours.
              </p>
              <ul className="mt-6 space-y-3">
                {details.map((c) => {
                  const content = (
                    <>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/60">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="truncate text-sm font-medium">
                          {c.value}
                        </p>
                      </div>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3 transition-all hover:border-border hover:bg-accent/30"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all hover:border-border hover:bg-accent/30 hover:text-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="border-border/60 bg-card/40 backdrop-blur-sm p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="bg-background/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="bg-background/40"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a little about your project or idea..."
                    rows={6}
                    className="bg-background/40 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full sm:w-auto"
                >
                  <Send className="mr-1 h-4 w-4" />
                  Send message
                </Button>
                <p className="text-xs text-muted-foreground">
                  This opens your email app with the message pre-filled — nothing is sent from this page directly.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
