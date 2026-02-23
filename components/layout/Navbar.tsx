"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "La Piattaforma", href: "#piattaforma" },
  { label: "Fashion Graph", href: "#fashion-graph" },
  { label: "Partnership", href: "#partnership" },
  { label: "Team", href: "#team" },
];

function HummingbirdIcon() {
  return (
    <svg
      width="56"
      height="34"
      viewBox="0 0 385 245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <path
        d="M263.35,160.16c4.68,4.33,9.44,8.21,14.82,11.43,4.47,2.67,9.16,5.05,14.19,6.42l18.14,4.95c2.89.79,5.45,1.99,8.74,2.34l-28.07-43.16c-4.97-7.64-9.56-15.34-12.66-23.98l43.51,63.6,5.49,8.41,17.66,11.09c9.51,5.97,42.86,24.84,39.13,38.93-1.35,5.09-7.26,5.36-10.94,3.82-4.47-1.88-8.33-4.45-11.87-7.75-4.35-4.06-8.27-8.2-12.14-12.74l-13.21-15.54-8.29-10.17c-9.63-4.88-19.76-8.23-30.36-10.6-6.87-1.53-12.97-3.75-19.34-6.69-12.57-5.8-26.73-12.04-32.68-25.57-4.91-11.16-10.43-29.87-12.39-41.77l-1.85-11.24c-1.91-11.59-7.73-26.28-19.81-30.8-12.23-4.58-24.84-7.21-37.9-7.26l-35.52-.13c-1.45,0-2.96.33-4.32.15l-3.52-.47c5.27-1.42,10.22-1.49,15.43-1.81l4.25-.26,15.9-1.36c16.48-1.41,26.89-5.2,41.37-12.78,8.49-4.44,15.7-11.32,25.69-12.56,2.88-.36,5.95-.19,8.84.04,6.13.48,11.4,3.09,15.79,7.25s6.69,9.09,8.93,14.56l6.67,16.27c2.48-3.4,4.3-6.43,6.67-9.34,5.47-6.73,11.14-12.96,17.41-19,6.74-6.5,13.23-12.71,20.79-18.29,8.55-6.31,17.27-11.86,26.35-17.33,3.23-1.94,6.42-3.37,9.8-4.93,7.21-3.31,15.47-5.36,23.12-2.67,3.46,1.21,1.02,6.42-.38,9.79l-16.87,40.61-7.08,15.11c-5.18,11.07-10.71,21.44-17.74,31.46-6.66,9.49-14.51,22.92-25.31,27.88-5.62,2.58-13.74,1.44-17.53-2.31-3.19-3.16-4.91-7.01-6.5-11.14-1.89-4.94-3.16-9.86-2.29-15.27.85,3.83,1.9,7.41,3.09,11.28,1.74,5.68,4.37,11.03,9.4,14.54,2.13,1.49,5.31,2.47,7.96,2.06,5.08-.78,11.68-7.61,14.78-11.59,8.88-11.42,14.95-21.9,21.19-34.86l9.93-20.63,6.55-13.57,18.47-41.41c-4.72-3.89-14.81.39-19.49,2.49-7.44,3.33-13.99,7.63-20.6,12.38-7.05,5.07-13.69,10.1-19.8,16.33l-17.04,17.38c-9.95,10.15-19.89,27.39-24.01,31.34-2.11,2.02-6.84,1.68-8.62-.48-1.64-1.99-1.85-4.6-2.39-6.97-1.26-5.42-3.2-10.4-5.77-15.31-1.98-3.8-3.79-7.46-6.55-10.73-6.55-7.77-17.31-10.86-26.83-7.04-4.6,1.85-11.83,7.11-15.12,8.52-11.8,5.05-24.18,7.94-36.84,9.92l-3.97.62c3.04.28,6,0,9.25-.1,11.69-.34,24.37-.98,35.31,2.9,4.03,1.43,7.67,3.45,11.37,5.46,7.22,3.9,12.08,10.04,15.14,17.58,2.45,6.03,4.04,12.23,4.93,18.78.45,3.32.79,6.47,1.48,9.73,2.08,9.82,4.65,19.26,7.96,28.72,2.1,5.99,5.32,11.04,10.11,15.48ZM366.05,223.29l-11.52-9.59c-5.73-3.65-11.11-7.52-17.79-10.56,6.1,9,12.87,16.74,20.01,24.45,4.99,5.39,14.65,15.42,22.16,15.4,4.89-4.27-9.95-16.66-12.86-19.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-colibri-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6 lg:px-16">
        <a
          href="#"
          className={`flex items-center gap-2.5 font-serif text-lg tracking-[0.08em] transition-colors duration-500 ${
            scrolled ? "text-colibri-text" : "text-white"
          }`}
        >
          <HummingbirdIcon />
          COLIBRI
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-colibri-gold ${
                scrolled ? "text-colibri-muted" : "text-white/50"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contattaci"
            className="ml-2 border border-colibri-gold px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase text-colibri-gold transition-all duration-300 hover:bg-colibri-gold hover:text-white"
          >
            Contattaci
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex flex-col gap-1.5 md:hidden ${
            scrolled ? "text-colibri-text" : "text-white"
          }`}
          aria-label="Menu"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-colibri-border bg-white px-8 py-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-sm tracking-wide text-colibri-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contattaci"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-block border border-colibri-gold px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase text-colibri-gold"
          >
            Contattaci
          </a>
        </div>
      )}
    </nav>
  );
}
