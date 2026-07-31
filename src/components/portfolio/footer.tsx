import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/hamzahyabi/", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/HamzaHyabi", label: "GitHub" },
  { icon: Mail, href: "mailto:hamza.hyabi@hotmail.com", label: "Email" },
];

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#community", label: "Community" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="text-sm font-medium tracking-tight">Hamza Hyabi</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hamza Hyabi. Built with React &amp; Tailwind CSS.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

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
