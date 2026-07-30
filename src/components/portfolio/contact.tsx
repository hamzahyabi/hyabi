import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader as Loader2, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { SectionHeading } from "./section-heading";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hamzahyabi0@gmail.com",
    href: "mailto:hamzahyabi0@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "hamzahyabi",
    href: "https://www.linkedin.com/in/hamzahyabi/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "HamzaHyabi",
    href: "https://github.com/HamzaHyabi",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Message sent. I'll get back to you soon.");
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 2500);
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
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3 transition-all hover:border-border hover:bg-accent/30"
                    >
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
                    </a>
                  </li>
                ))}
              </ul>
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
                  disabled={loading}
                  className="w-full rounded-full sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : sent ? (
                    <>
                      <Check className="mr-1 h-4 w-4" />
                      Sent
                    </>
                  ) : (
                    <>
                      <Send className="mr-1 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
