import { Reveal } from "./Motion";
import { PRINCIPLES } from "@/lib/content";

export default function WhyForge() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal as="p" className="meta eyebrow">
          Principles
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-[length:var(--t-h2)] mt-7">
            WHY <span className="pf pf--teal">forge</span>?
          </h2>
        </Reveal>

        <div className="why__grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08} className="why__cell">
              <span className="why__idx">{p.no}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
