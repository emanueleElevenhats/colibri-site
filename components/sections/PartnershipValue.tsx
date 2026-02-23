"use client";

import { useInView } from "@/lib/useInView";

const values = [
  {
    number: "01",
    title: "Estendi il funnel oltre il punto vendita.",
    body: "Il vostro cliente scopre la vostra offerta durante la fase di pianificazione — settimane prima di qualsiasi touchpoint fisico. Con Colibri il vostro catalogo diventa ricercabile e acquistabile da milioni di consumatori nel momento esatto in cui decidono cosa comprare.",
    tags: ["Pre-departure intent", "Integrazione catalogo", "Click & Collect"],
  },
  {
    number: "02",
    title: "Converti il traffico con confidenza.",
    body: "Il virtual try-on elimina la principale barriera all'acquisto luxury online: l'impossibilità di visualizzare la vestibilità. Gli utenti che provano digitalmente convertono a tassi significativamente più alti e restituiscono molto meno frequentemente.",
    tags: [
      "Virtual try-on",
      "Styling personalizzato",
      "Checkout unificato",
      "\u2193 Resi",
    ],
  },
  {
    number: "03",
    title: "Accedi a intelligence che nessun altro ha.",
    body: "Colibri aggrega dati di preferenza consumer cross-brand e cross-mercato in tempo reale. Come partner strategico, accedi al Fashion Graph — il layer proprietario che mappa trend di stile, affinità brand e intent d'acquisto su base globale.",
    tags: ["Dashboard real-time", "Trend forecasting", "Benchmark competitor"],
  },
];

export default function PartnershipValue() {
  const { ref, isInView } = useInView();

  return (
    <section id="partnership" className="bg-white">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          Perché Colibri
        </p>

        <h2
          className={`mt-16 max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tre ragioni per cui
          <br />
          questo cambia il vostro business.
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
