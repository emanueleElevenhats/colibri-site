"use client";

import { useInView } from "@/lib/useInView";
import ComparisonTable from "@/components/ui/ComparisonTable";

const stats = [
  {
    value: "$2.3T",
    label: "Valore mercato fashion e-commerce 2034 (CAGR 10%)",
  },
  {
    value: "Primo",
    label: "Entrante europeo con AI fashion search completo",
  },
  {
    value: "74%",
    label: "Viaggiatori che pianificano acquisti pre-viaggio",
  },
  {
    value: "81%",
    label: "Gen Z che preferisce lo shopping AI-assisted",
  },
];

export default function Market() {
  const { ref, isInView } = useInView();

  return (
    <section id="mercato" className="bg-colibri-bg">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          Il mercato
        </p>

        <h2
          className={`mt-16 max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          $2.3 trilioni di mercato.
          <br />
          Nessun player digitale
          <br />
          dominante in Europa.
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
