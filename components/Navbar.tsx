"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${stuck ? "stuck" : ""}`}>
        <div className="wrap nav__in">
          <Link href="#top" className="brand" aria-label={`${BRAND.full} home`}>
            <Image src="/logo.png" alt={`${BRAND.full} logo`} width={620} height={513} priority />
            <span className="flex flex-col">
              <span className="brand__name">AI&nbsp;Forge</span>
              <span className="brand__sub">Agency</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="#contact" className="btn btn--solid nav__cta">
            Start a Project <span className="ar">&rarr;</span>
          </Link>

          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <i style={{ transform: open ? "translateY(3.75px) rotate(45deg)" : undefined }} />
            <i style={{ transform: open ? "translateY(-3.75px) rotate(-45deg)" : undefined }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.span
                key={l.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.19, 1, 0.22, 1] }}
              >
                <Link href={l.href} className="menu__link block" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </motion.span>
            ))}
            <div className="mt-10">
              <Link href="#contact" className="btn btn--solid" onClick={() => setOpen(false)}>
                Start a Project <span className="ar">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
