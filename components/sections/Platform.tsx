"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";

export default function Platform() {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  const features = [
    { number: "01", title: t.platform.feature1Title, description: t.platform.feature1Desc },
    { number: "02", title: t.platform.feature2Title, description: t.platform.feature2Desc },
    { number: "03", title: t.platform.feature3Title, description: t.platform.feature3Desc },
    { number: "04", title: t.platform.feature4Title, description: t.platform.feature4Desc },
  ];

  return (
    <section id="piattaforma" className="bg-colibri-bg">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          {t.platform.label}
        </p>

        <div
          className={`mt-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl">
            {t.platform.titleLine1}
            <br />
            {t.platform.titleLine2}
          </h2>
          <p className="mt-10 max-w-2xl text-lg font-light leading-[1.85] text-colibri-muted">
            {t.platform.body}
          </p>
        </div>

        <div
          className={`mt-24 grid gap-x-16 gap-y-20 sm:grid-cols-2 transition-all delay-300 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((f) => (
            <div key={f.number} className="border-l-2 border-colibri-gold/60 py-1 pl-8">
              <p className="text-[11px] font-medium tracking-[0.3em] text-colibri-gold">
                {f.number}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-normal text-colibri-text">
                {f.title}
              </h3>
              <p className="mt-4 text-base font-light leading-[1.8] text-colibri-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
