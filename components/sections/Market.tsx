"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";
import ComparisonTable from "@/components/ui/ComparisonTable";

export default function Market() {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  const stats = [
    { value: t.market.stat1Value, label: t.market.stat1Label },
    { value: t.market.stat2Value, label: t.market.stat2Label },
    { value: t.market.stat3Value, label: t.market.stat3Label },
    { value: t.market.stat4Value, label: t.market.stat4Label },
  ];

  return (
    <section id="mercato" className="bg-colibri-bg">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          {t.market.label}
        </p>

        <h2
          className={`mt-16 max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.market.titleLine1}
          <br />
          {t.market.titleLine2}
          <br />
          {t.market.titleLine3}
        </h2>

        {/* Stat row */}
        <div
          className={`mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 transition-all delay-200 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s) => (
            <div key={s.value} className="border-t border-colibri-gold/40 pt-8">
              <p className="font-serif text-4xl font-normal text-colibri-gold">
                {s.value}
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-colibri-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div
          className={`mt-28 transition-all delay-400 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}
