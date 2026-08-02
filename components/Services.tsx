import Link from "next/link";
import { Reveal } from "./Motion";
import { SERVICES } from "@/lib/content";

function Arrow() {
  return (
    <svg
      className="row__ar"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="9 6 18 6 18 15" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="svc__head">
          <div>
            <Reveal as="p" className="meta eyebrow">
              Capabilities
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display text-[length:var(--t-h2)] mt-7">
                Services
              </h2>
            </Reveal>
          </div>
          <Reveal as="p" delay={0.18} className="lede max-w-[34ch]">
            Four things we build. Most projects need more than one.
          </Reveal>
        </div>

        <div className="svc__list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.07}>
              <Link href="#contact" className="row">
                <span className="row__no">{s.no}</span>
                <span className="row__title">{s.title}</span>
                <span className="row__desc">{s.desc}</span>
                <Arrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
