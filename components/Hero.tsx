"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ForgeLine, MaskLine, MagneticLink } from "./Motion";
import { HERO_STATS } from "@/lib/content";

const EASE = [0.19, 1, 0.22, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const markY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 54]);

  const fade = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 22 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay },
  });

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <motion.p className="meta eyebrow justify-center" {...fade(0)}>
              AI &times; Web &times; Automation &times; Creative
            </motion.p>

            <h1>
              <MaskLine immediate delay={0.08}>
               We build
              </MaskLine>
              <MaskLine immediate delay={0.18} className="pf pf--teal">
                the AI systems
              </MaskLine>
              <MaskLine immediate delay={0.28}>
               you don't have time to
              </MaskLine>
              <MaskLine immediate delay={0.38}>
               figure out.
              </MaskLine>
            </h1>

            <motion.p className="lede max-w-[44ch] mx-auto text-center mt-[clamp(1.8rem,3.5vw,2.6rem)]" {...fade(0.52)}>
              AI Forge Agency builds intelligent websites, AI-powered experiences, automation systems
              and digital identities for ambitious brands.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 justify-center mt-[clamp(1.8rem,3.5vw,2.6rem)]" {...fade(0.62)}>
              <MagneticLink href="#https://www.instagram.com/aiforge.co/?hl=en" className="btn btn--solid">
                Start a Project <span className="ar">&rarr;</span>
              </MagneticLink>
              <Link href="#work" className="btn btn--ghost btn--down">
                Explore Our Work <span className="ar">&darr;</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div className="hero__stats" {...fade(0.76)}>
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <b>{s.value}</b>
              <span className="meta">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <ForgeLine immediate />
    </section>
  );
}
