"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";

export default function Hero() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useTranslation();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
    { value: t.hero.stat4Value, label: t.hero.stat4Label },
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-between bg-colibri-dark"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-8 pt-40 pb-20 lg:px-16">
        {/* Gold line + label */}
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8 h-px w-16 bg-colibri-gold" />
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-gold">
            {t.hero.label}
          </p>
        </div>

        {/* H1 */}
        <h1
          className={`mt-12 max-w-4xl font-serif text-[2.75rem] font-normal leading-[1.1] tracking-[-0.01em] text-white transition-all delay-200 duration-1000 sm:text-5xl md:text-6xl lg:text-[5.5rem] ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h1>

        {/* Subheading */}
        <p
          className={`mt-12 max-w-xl text-lg font-light leading-[1.8] text-white/50 md:text-xl transition-all delay-400 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className={`mt-16 flex flex-wrap items-center gap-6 transition-all delay-500 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#piattaforma"
            className="border border-colibri-gold px-10 py-4 text-[11px] font-medium tracking-[0.2em] uppercase text-colibri-gold transition-all duration-300 hover:bg-colibri-gold hover:text-white"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#contattaci"
            className="group px-2 py-4 text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 transition-colors duration-300 hover:text-white"
          >
            {t.hero.ctaSecondary}{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Stat strip */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-8 py-10 md:grid-cols-4 lg:px-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${
                i < stats.length - 1 ? "md:border-r md:border-white/[0.06]" : ""
              } px-6 text-center`}
            >
              <p className="font-serif text-2xl font-normal text-colibri-gold lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.2em] uppercase text-white/30">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
