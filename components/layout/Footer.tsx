"use client";

import { useTranslation } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-colibri-border bg-colibri-bg px-6 py-8 text-center">
      <p className="text-xs tracking-widest uppercase text-colibri-muted">
        {t.footer.copyright}
      </p>
    </footer>
  );
}
