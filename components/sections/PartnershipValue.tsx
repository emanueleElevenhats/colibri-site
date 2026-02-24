"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";

export default function PartnershipValue() {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  const values = [
    {
      number: "01",
      title: t.partnership.value1Title,
      body: t.partnership.value1Body,
      tags: t.partnership.value1Tags,
    },
    {
      number: "02",
      title: t.partnership.value2Title,
      body: t.partnership.value2Body,
      tags: t.partnership.value2Tags,
    },
    {
      number: "03",
      title: t.partnership.value3Title,
      body: t.partnership.value3Body,
      tags: t.partnership.value3Tags,
    },
  ];

  return (
    <section id="partnership" className="bg-white">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          {t.partnership.label}
        </p>

        <h2
          className={`mt-16 max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.partnership.titleLine1}
          <br />
          {t.partnership.titleLine2}
        </h2>

        <div className="mt-28 space-y-0">
          {values.map((v, i) => (
            <div
              key={v.number}
              className={`relative transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              {/* Thin top border */}
              <div className="border-t border-colibri-border" />

              <div className="grid gap-8 py-20 lg:grid-cols-[120px_1fr] lg:gap-16">
                {/* Decorative large number */}
                <span className="font-serif text-8xl font-normal leading-none text-colibri-border/60 lg:text-9xl">
                  {v.number}
                </span>

                <div>
                  <h3 className="font-serif text-3xl font-normal leading-[1.2] text-colibri-text md:text-4xl">
                    {v.title}
                  </h3>
                  <p className="mt-8 max-w-2xl text-lg font-light leading-[1.85] text-colibri-muted">
                    {v.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-colibri-border px-4 py-1.5 text-[11px] tracking-[0.1em] text-colibri-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
