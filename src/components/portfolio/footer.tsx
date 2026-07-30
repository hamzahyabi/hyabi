import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  { icon: GithubIcon, href: "https://github.com/HamzaHyabi", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/hamzahyabi/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:hamzahyabi0@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hamza Hyabi. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all hover:border-border hover:bg-accent/30 hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
