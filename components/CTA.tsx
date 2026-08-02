import Image from "next/image";
import { Instagram, Mail } from "lucide-react";
import { MagneticLink, Reveal } from "./Motion";
import { BRAND } from "@/lib/content";

export default function CTA() {
  const mailto = "mailto:" + BRAND.email;

  return (
    <section className="sec cta" id="contact">
      <Image src="/logo-light.png" alt="" width={620} height={513} className="cta__mark" />

      <div className="wrap relative z-10">
        <Reveal>
          <h2>LET&apos;S BUILD TOGETHER.</h2>
        </Reveal>

        <Reveal as="p" delay={0.12} className="lede">
          Have an idea, business or project in mind? Let&apos;s turn it into something exceptional.
        </Reveal>

        <div className="ctacards">
          <Reveal delay={0.2} className="ctacard">
            <span className="ctacard__icon">
              <Instagram size={22} strokeWidth={1.5} />
            </span>
            <h3>Instagram</h3>
            <p>Follow our latest projects, client work and behind-the-scenes.</p>
            <a href={"https://www.instagram.com/aiforge.co/?hl=en"} className="btn btn--light ctacard__btn" target="_blank" rel="noopener noreferrer">
              Visit Instagram <span className="ar">&rarr;</span>
            </a>
          </Reveal>

          <Reveal delay={0.28} className="ctacard">
            <span className="ctacard__icon">
              <Mail size={22} strokeWidth={1.5} />
            </span>
            <h3>Email</h3>
            <p>Send us your project requirements and we will get back to you quickly.</p>
            <a href={mailto} className="btn btn--light ctacard__btn">
              Send Email <span className="ar">&rarr;</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.38} className="ctapanel">
          <h3>Ready To Build Something Amazing?</h3>
          <p>From websites and branding to AI-powered solutions, DM us on Instagram to start your next project.</p>
          <MagneticLink href={"https://www.instagram.com/aiforge.co/?hl=en"} className="btn btn--light">
            Start a Project <span className="ar">&rarr;</span>
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}