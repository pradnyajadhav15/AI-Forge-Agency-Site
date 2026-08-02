"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.19, 1, 0.22, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -8% 0px" } as const;

/* ------------------------------------------------------------------
   Reveal â€” fade + translate. The workhorse.
   ------------------------------------------------------------------ */
type RevealTag = "div" | "section" | "article" | "figure" | "p" | "h2" | "span";

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  p: motion.p,
  h2: motion.h2,
  span: motion.span,
} as const;

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  as?: RevealTag;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = MOTION_TAGS[as] as typeof motion.div;

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} id={id}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      id={id}
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   MaskLine â€” a single line of type sliding up out of an overflow mask.
   Used for the hero headline. `immediate` skips the viewport trigger.
   ------------------------------------------------------------------ */
export function MaskLine({
  children,
  delay = 0,
  immediate = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  immediate?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <span className="block">{children}</span>;

  const inner = {
    initial: { y: "105%" },
    animate: { y: 0 },
    transition: { duration: 1.15, ease: EASE, delay },
  };

  return (
    <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
      {immediate ? (
        <motion.span className={`block ${className ?? ""}`} initial={inner.initial} animate={inner.animate} transition={inner.transition}>
          {children}
        </motion.span>
      ) : (
        <motion.span
          className={`block ${className ?? ""}`}
          initial={inner.initial}
          whileInView={inner.animate}
          viewport={VIEWPORT}
          transition={inner.transition}
        >
          {children}
        </motion.span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------
   ForgeLine â€” the signature. A continuous stroke that draws itself in
   on a teal-to-sand "cooling metal" gradient.
   ------------------------------------------------------------------ */
const drawVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: (custom: number) => ({
    pathLength: 1,
    transition: { duration: 2.1, ease: EASE, delay: custom },
  }),
};

export function ForgeLine({ immediate = false }: { immediate?: boolean }) {
  const reduce = useReducedMotion();
  const animateProps = reduce
    ? { initial: "visible" as const }
    : immediate
      ? { initial: "hidden" as const, animate: "visible" as const }
      : { initial: "hidden" as const, whileInView: "visible" as const, viewport: VIEWPORT };

  return (
    <svg className="hero__forge" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="cooling" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E8DFC9" />
          <stop offset="0.45" stopColor="#008080" />
          <stop offset="1" stopColor="#E8DFC9" />
        </linearGradient>
      </defs>
      <motion.path
        d="M-20 150 C 220 150, 300 40, 520 40 C 760 40, 820 168, 1060 168 C 1260 168, 1320 92, 1460 92"
        stroke="url(#cooling)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
        variants={drawVariants}
        custom={0.3}
        {...animateProps}
      />
      <motion.path
        d="M-20 176 C 240 176, 320 78, 540 78 C 780 78, 840 190, 1080 190"
        stroke="#E8DFC9"
        strokeWidth="1"
        opacity="0.7"
        variants={drawVariants}
        custom={0.5}
        {...animateProps}
      />
    </svg>
  );
}

/** Small drawn rule used inside the philosophy block. */
export function ForgeRule({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const animateProps = reduce
    ? { initial: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: VIEWPORT };

  return (
    <svg className={className} viewBox="0 0 400 60" fill="none" aria-hidden="true">
      <motion.path
        d="M2 44 C 90 44, 110 12, 200 12 C 290 12, 310 44, 398 44"
        stroke="#008080"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
        variants={drawVariants}
        custom={0}
        {...animateProps}
      />
      <motion.path
        d="M200 12 L200 4"
        stroke="#008080"
        strokeWidth="1.4"
        strokeLinecap="round"
        variants={drawVariants}
        custom={0.9}
        {...animateProps}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------
   MagneticLink â€” CTA that leans toward the cursor. Pointer devices only.
   ------------------------------------------------------------------ */
export function MagneticLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onPointerMove={(e) => {
        if (reduce || !ref.current || e.pointerType !== "mouse") return;
        const r = ref.current.getBoundingClientRect();
        ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.16}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "";
      }}
      style={{ transition: "transform .35s cubic-bezier(.19,1,.22,1)" }}
    >
      {children}
    </motion.a>
  );
}
