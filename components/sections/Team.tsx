"use client";

import { useInView } from "@/lib/useInView";
import { useTranslation } from "@/lib/i18n/context";

export default function Team() {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  const team = [
    {
      initials: "FV",
      name: t.team.member1Name,
      role: t.team.member1Role,
      bio: t.team.member1Bio,
    },
    {
      initials: "EMP",
      name: t.team.member2Name,
      role: t.team.member2Role,
      bio: t.team.member2Bio,
    },
    {
      initials: "FT",
      name: t.team.member3Name,
      role: t.team.member3Role,
      bio: t.team.member3Bio,
    },
  ];

  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-6xl border-t border-colibri-border" />
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-8 py-32 lg:px-16 lg:py-44"
      >
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-colibri-muted">
          {t.team.label}
        </p>

        <h2
          className={`mt-16 max-w-xl font-serif text-4xl font-normal leading-[1.15] tracking-[-0.01em] text-colibri-text md:text-5xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.team.titleLine1}
          <br />
          {t.team.titleLine2}
        </h2>

        <div
          className={`mt-24 grid gap-px bg-colibri-border sm:grid-cols-3 transition-all delay-300 duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {team.map((member) => (
            <div
              key={member.initials}
              className="bg-white p-10 lg:p-12"
            >
              {/* Initials circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-colibri-gold">
                <span className="text-xs font-medium tracking-[0.15em] text-white">
                  {member.initials}
                </span>
              </div>

              <h3 className="mt-8 font-serif text-xl font-normal text-colibri-text">
                {member.name}
              </h3>
              <p className="mt-2 text-[11px] font-medium tracking-[0.2em] uppercase text-colibri-gold">
                {member.role}
              </p>
              <p className="mt-6 text-sm font-light leading-[1.8] text-colibri-muted">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
