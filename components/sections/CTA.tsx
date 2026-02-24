"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";

export default function CTA() {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  return (
    <section id="contattaci" className="bg-colibri-dark">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-40 text-center lg:px-16 lg:py-56"
      >
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mx-auto mb-10 h-px w-12 bg-colibri-gold/40" />
          <h2 className="mx-auto max-w-2xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-white md:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-lg font-light leading-[1.85] text-white/40">
            {t.cta.body}
          </p>
          <a
            href="mailto:fiammettaviceconte@live.it"
            className="mt-16 inline-block border border-colibri-gold px-12 py-5 text-[11px] font-medium tracking-[0.2em] uppercase text-colibri-gold transition-all duration-300 hover:bg-colibri-gold hover:text-white"
          >
            {t.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
