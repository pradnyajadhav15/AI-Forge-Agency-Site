import Image from "next/image";
import { Reveal } from "./Motion";

const CASES = [
  {
    no: "01",
    name: "AI FORGE",
    category: "Agency Branding",
    summary:
      "A complete identity system built to give AI Forge a clear, confident presence across web and print.",
    boxes: [
      { label: "Challenge", text: "Show a smart, modern AI agency without looking like every other tech startup." },
      { label: "Strategy", text: "One flexible mark, a tight teal and sand palette, and an editorial tone." },
      { label: "Deliverables", text: "Logo, stationery, icon set, social assets." },
      { label: "Outcome", text: "A consistent, premium look that works everywhere." },
    ],
    tags: ["Logo Design", "Brand System", "Typography"],
    image: "/work/ai-forge-brand-board.png",
    alt: "AI Forge brand guidelines board showing logo usage, colour palette, typography and mockups",
  },
  {
    no: "02",
    name: "R. RAMESH ARTS",
    category: "Cultural Brand / E-commerce",
    summary:
      "A traditional Ganapati arts studio brought online, with its handcrafted identity carried through to a full storefront.",
    boxes: [
      { label: "Challenge", text: "Take a workshop known by word of mouth and give it a presence customers can find and trust." },
      { label: "Strategy", text: "Keep the hand-drawn mark central, let the craft photography lead, and support three languages." },
      { label: "Deliverables", text: "Identity application, storefront, payments, order tracking." },
      { label: "Outcome", text: "A working shop that sells in English, Hindi and Marathi." },
    ],
    tags: ["Brand Application", "E-commerce", "Multilingual"],
    image: "/work/ramesh-arts-brand-board.png",
    alt: "R. Ramesh Arts brand board showing the Ganapati mark, palette, typography and product application",
  },
];

export default function BrandCases() {
  return (
    <section className="sec" id="branding">
      <div className="wrap">
        <Reveal as="p" className="meta eyebrow">
          Branding Projects
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-[length:var(--t-h2)] mt-7">BRANDS WE BUILD</h2>
        </Reveal>
        <Reveal as="p" delay={0.16} className="lede mt-7">
          Identity systems built for clarity, not decoration.
        </Reveal>

        {CASES.map((c, i) => (
          <Reveal key={c.no} as="article" delay={i * 0.08} className="bcase">
            <div className="bcase__info">
              <span className="bcase__no">{c.no}</span>
              <h3 className="bcase__name">{c.name}</h3>
              <p className="meta meta--teal bcase__cat">{c.category}</p>
              <p className="bcase__summary">{c.summary}</p>

              <div className="bcase__boxes">
                {c.boxes.map((b) => (
                  <div className="bcase__box" key={b.label}>
                    <h4>{b.label}</h4>
                    <p>{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="bcase__tags">
                {c.tags.map((t) => (
                  <span className="bcase__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <figure className="bcase__board">
              <Image
                src={c.image}
                alt={c.alt}
                width={1000}
                height={1600}
                sizes="(max-width: 900px) 100vw, 46vw"
                className="bcase__img"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}