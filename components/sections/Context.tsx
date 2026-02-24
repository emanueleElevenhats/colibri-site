"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";

export default function Context() {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  const stats = [
    {
      value: t.context.stat1Value,
      caption: t.context.stat1Caption,
      source: t.context.stat1Source,
    },
    {
      value: t.context.stat2Value,
      caption: t.context.stat2Caption,
      source: t.context.stat2Source,
    },
    {
      value: t.context.stat3Value,
      caption: t.context.stat3Caption,
      source: t.context.stat3Source,
    },
  ];

  return (
    <section id="contesto" className="bg-white">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          {t.context.label}
        </p>

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:gap-24">
          {/* Text */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl">
              {t.context.titleLine1}
              <br />
              {t.context.titleLine2}
              <br />
              {t.context.titleLine3}
            </h2>
            <p className="mt-10 max-w-lg text-lg font-light leading-[1.85] text-colibri-muted">
              {t.context.body}
            </p>
          </div>

          {/* Stat cards */}
          <div
            className={`flex flex-col gap-12 transition-all delay-300 duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.value} className="border-t border-colibri-gold/40 pt-8">
                <p className="font-serif text-5xl font-normal text-colibri-gold lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-colibri-muted">
                  {stat.caption}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-colibri-muted/50">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
