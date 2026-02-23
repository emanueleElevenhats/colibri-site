"use client";

import { useInView } from "@/lib/useInView";

const nodes = [
  { label: "Stili", cx: 300, cy: 60 },
  { label: "Brand", cx: 540, cy: 150 },
  { label: "Occasioni", cx: 490, cy: 340 },
  { label: "Fit", cx: 110, cy: 340 },
  { label: "Mercati", cx: 60, cy: 150 },
  { label: "Budget", cx: 300, cy: 410 },
];

const edges = [
  [0, 1], [1, 2], [2, 5], [5, 3], [3, 4], [4, 0],
  [0, 5], [1, 3], [2, 4], [0, 2], [1, 4], [3, 0],
];

const products = [
  {
    title: "Report Periodici",
    description:
      "Deep-dive mensili, trimestrali o annuali su performance brand, trend e positioning competitivo — on demand o in abbonamento.",
  },
  {
    title: "Dashboard Live",
    description:
      "Dashboard integrata (compatibile Salesforce/Tableau) aggiornata in near real-time. Monitorate trend e preferenze nel momento in cui emergono.",
  },
  {
    title: "Luxury Brand Tracking",
    description:
      "Riservato ai partner premium — tracciamento opt-in dei profili high-value, con piena compliance GDPR dal day one.",
  },
];

function FashionGraphSVG() {
  return (
    <svg
      viewBox="0 0 600 470"
      className="mx-auto h-auto w-full max-w-2xl"
      fill="none"
    >
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#C9A96E"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          {/* Outer pulse ring */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="36"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="0.3"
            opacity="0.15"
            className="animate-pulse-gold"
            style={{ animationDelay: `${i * 500}ms` }}
          />
          {/* Inner ring */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="20"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="0.5"
            opacity="0.25"
          />
          {/* Node dot */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#C9A96E"
            className="animate-pulse-gold"
            style={{ animationDelay: `${i * 500}ms` }}
          />
          {/* Label */}
          <text
            x={node.cx}
            y={node.cy + 32}
            textAnchor="middle"
            fill="#C9A96E"
            fontSize="10"
            fontFamily="var(--font-inter)"
            letterSpacing="0.15em"
            opacity="0.5"
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function FashionGraph() {
  const { ref, isInView } = useInView();

  return (
    <section id="fashion-graph" className="bg-colibri-dark">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-gold/70">
          Il vantaggio competitivo
        </p>

        <div
          className={`mt-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-white md:text-5xl">
            Fashion Graph.
            <br />
            Il vostro vantaggio competitivo.
          </h2>
          <p className="mt-10 max-w-xl text-lg font-light leading-[1.85] text-white/40">
            Il Fashion Graph mappa le relazioni tra ogni variabile nel percorso
            fashion di un consumatore &mdash; aggiornato in continuazione.
            Disponibile come report periodici o dashboard live in abbonamento.
          </p>
        </div>

        {/* Graph visualization */}
        <div
          className={`my-24 transition-all delay-300 duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <FashionGraphSVG />
        </div>

        {/* Product tiers */}
        <div
          className={`grid gap-px bg-white/[0.04] sm:grid-cols-3 transition-all delay-500 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-colibri-dark p-10 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="h-px w-8 bg-colibri-gold/50 transition-all duration-300 group-hover:w-12 group-hover:bg-colibri-gold" />
              <h3 className="mt-8 font-serif text-xl font-normal text-white">
                {p.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-[1.8] text-white/40">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
