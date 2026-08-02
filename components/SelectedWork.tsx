import Link from "next/link";
import { Reveal } from "./Motion";
import { PROJECTS } from "@/lib/content";

export default function SelectedWork() {
  return (
    <section className="sec bg-beige" id="work">
      <div className="wrap">
        <div className="max-w-[60ch]">
          <Reveal as="p" className="meta eyebrow">
            Portfolio
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-[length:var(--t-h2)] mt-7">PREVIOUS WORK</h2>
          </Reveal>
          <Reveal as="p" delay={0.18} className="lede mt-7">
            Digital experiences forged for ambitious brands.
          </Reveal>
        </div>

        {PROJECTS.map((p, i) => {
          return (
            <Reveal key={p.no} as="article" className={`proj ${i % 2 === 1 ? "proj--flip" : ""}`}>
              <div>
                <span className="proj__no">{p.no}</span>
                <h3>{p.name}</h3>
                <p className="meta meta--teal mt-4">{p.cat}</p>
                <p className="proj__desc">{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link className="proj__link" href={p.href}>
                  View Website <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
