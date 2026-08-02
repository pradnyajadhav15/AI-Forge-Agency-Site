import { ForgeRule, Reveal } from "./Motion";

export default function Philosophy() {
  return (
    <section className="sec bg-beige" id="about">
      <div className="wrap">
        <Reveal as="p" className="meta eyebrow">
          Our Approach
        </Reveal>

        <div className="philo__grid">
          <Reveal delay={0.08}>
            <h2 className="display text-[length:var(--t-h2)]">
              WE DON&apos;T JUST BUILD
              <br />
              WEBSITES.
              <br />
              WE <span className="pf pf--teal">forge</span> DIGITAL
              <br />
              EXPERIENCES.
            </h2>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="lede">
              We combine creative direction, modern web technology, AI and automation to turn
              ambitious ideas into digital experiences that feel as intelligent as they perform.
            </p>
            <p className="lede mt-6">
              Every engagement starts in the same place &mdash; the raw material of your business. We
              heat it, shape it, and finish it until the result is unmistakably yours.
            </p>
            <ForgeRule className="block w-full max-w-[320px] h-auto mt-10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
