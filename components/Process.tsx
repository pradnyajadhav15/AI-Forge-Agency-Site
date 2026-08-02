import { Reveal } from "./Motion";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section className="sec bg-beige">
      <div className="wrap">
        <Reveal as="p" className="meta eyebrow">
          How We Work
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-[length:var(--t-h2)] mt-7">
            FROM RAW IDEA
            <br />
            TO FINISHED FORM
          </h2>
        </Reveal>

        <div className="proc__track">
          <span className="proc__line" />
          <div className="proc__steps">
            {PROCESS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.09} className="step">
                <span className="step__dot" />
                <span className="step__no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
