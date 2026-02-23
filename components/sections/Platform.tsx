"use client";

import { useInView } from "@/lib/useInView";

const features = [
  {
    number: "01",
    title: "AI Fashion Assistant",
    description:
      "Agente conversazionale che cura outfit su misura per body type, budget, occasione, palette cromatica e preferenze brand.",
  },
  {
    number: "02",
    title: "Virtual Try-On in Tempo Reale",
    description:
      "Gli utenti visualizzano i capi sul proprio avatar personalizzato prima dell'acquisto — riducendo i resi e aumentando la conversion.",
  },
  {
    number: "03",
    title: "Visual Search",
    description:
      "Riconoscimento immagini che identifica qualsiasi capo da una foto e restituisce risultati immediati.",
  },
  {
    number: "04",
    title: "Social Commerce Layer",
    description:
      "Avenor W: la community fashion dove gli utenti condividono outfit, seguono stili e acquistano direttamente dai post.",
  },
];

export default function Platform() {
  const { ref, isInView } = useInView();

  return (
    <section id="piattaforma" className="bg-colibri-bg">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          La piattaforma
        </p>

        <div
          className={`mt-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl">
            Un motore.
            <br />
            Ogni brand. Ogni consumatore.
          </h2>
          <p className="mt-10 max-w-2xl text-lg font-light leading-[1.85] text-colibri-muted">
            Avenor è il motore di ricerca fashion AI-powered che consente agli
            utenti di scoprire, provare e acquistare capi da qualsiasi brand al
            mondo &mdash; attraverso un&apos;unica interfaccia personalizzata.
            Colibri mette questa infrastruttura al servizio dei brand partner.
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
