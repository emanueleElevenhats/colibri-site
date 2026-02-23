"use client";

import { useInView } from "@/lib/useInView";

const stats = [
  {
    value: "62%",
    caption:
      "dei journey e-commerce inizia su motore di ricerca",
    source: "WPP Media",
  },
  {
    value: "40%",
    caption: "tasso medio di reso nel fashion online",
    source: "Eco-Age",
  },
  {
    value: "4 su 10",
    caption:
      "consumatori insoddisfatti dell'esperienza di scoperta prodotto",
    source: "PR Newswire",
  },
];

export default function Context() {
  const { ref, isInView } = useInView();

  return (
    <section id="contesto" className="bg-white">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          Il contesto
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
              Il consumatore fashion
              <br />
              decide prima ancora
              <br />
              di entrare in negozio.
            </h2>
            <p className="mt-10 max-w-lg text-lg font-light leading-[1.85] text-colibri-muted">
              Il 62% dei percorsi d&apos;acquisto online inizia con una ricerca.
              Le decisioni vengono prese giorni &mdash; spesso settimane &mdash;
              prima di qualsiasi touchpoint fisico. I brand che non presiedono
              questo momento perdono visibilità, clienti e dati preziosi.
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
