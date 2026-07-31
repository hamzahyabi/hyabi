import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#community", label: "Community" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-border/60 px-4 py-2 text-foreground transition-all duration-300",
          scrolled
            ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
            : "dark bg-background/30 backdrop-blur-md"
        )}
      >
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
            HH
          </span>
          <span className="hidden sm:inline text-sm font-medium tracking-tight">
            Hamza Hyabi
          </span>
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full">
            <a href="#contact">Me contacter</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a
                        href={l.href}
                        className="block rounded-lg px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
