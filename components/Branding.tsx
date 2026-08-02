import { Reveal } from "./Motion";
import { BRANDS } from "@/lib/content";
import { BRAND_ART } from "@/lib/art";

export default function Branding() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal as="p" className="meta eyebrow">
          Identity
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-[length:var(--t-h2)] mt-7">
            {/* BRANDS WE <span className="pf pf--teal">forge</span> */}
            BRANDING PROJECTS
          </h2>
        </Reveal>
        <Reveal as="p" delay={0.16} className="lede mt-7">
          A series of refined brand identity case studies that showcase strategy, visual systems, and premium applications for ambitious businesses.
        </Reveal>

        <div className="bgrid">
          {BRANDS.map((b, i) => {
            const Art = BRAND_ART[b.art];
            return (
              <Reveal key={b.title} as="figure" delay={i * 0.06} className={`bcard ${b.wide ? "bcard--wide" : ""}`}>
                <div className="bcard__art">
                  <Art />
                </div>
                <figcaption className="bcard__body">
                  <h4>{b.title}</h4>
                  <p>{b.sub}</p>
                </figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
