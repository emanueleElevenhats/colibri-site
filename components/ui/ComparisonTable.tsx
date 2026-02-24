"use client";

import { useTranslation } from "@/lib/i18n/context";

const competitors = [
  {
    name: "Colibri",
    highlight: true,
    values: [true, true, true, true, true],
  },
  {
    name: "Alta Daily",
    highlight: false,
    values: [true, true, true, false, false],
  },
  {
    name: "Daydream",
    highlight: false,
    values: [true, true, false, false, false],
  },
  {
    name: "Hey Savi",
    highlight: false,
    values: [true, false, false, true, false],
  },
];

export default function ComparisonTable() {
  const { t } = useTranslation();

  const features = [
    t.market.featureFashionSearch,
    t.market.featureAiAssistant,
    t.market.featureVirtualTryOn,
    t.market.featureEuropeanMarket,
    t.market.featureB2bIntelligence,
  ];

  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr className="border-b border-colibri-border">
            <th className="py-5 pr-8 text-left text-[11px] font-medium tracking-[0.2em] uppercase text-colibri-muted">
              &nbsp;
            </th>
            {competitors.map((c) => (
              <th
                key={c.name}
                className={`py-5 px-6 text-center text-[11px] tracking-[0.2em] uppercase ${
                  c.highlight
                    ? "font-medium text-colibri-gold"
                    : "font-normal text-colibri-muted"
                }`}
              >
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={feature} className="border-b border-colibri-border/60">
              <td className="py-5 pr-8 text-sm font-light text-colibri-text">
                {feature}
              </td>
              {competitors.map((c) => (
                <td key={c.name} className="py-5 px-6 text-center">
                  {c.values[i] ? (
                    <span className="text-lg text-colibri-gold">{"\u2713"}</span>
                  ) : (
                    <span className="text-lg text-colibri-border">{"\u2717"}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
