import { useEffect, useState } from "react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#sunday-roast", label: "Sunday Roast" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-forest-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#top" className="font-signage text-brass-light text-xl tracking-wide">
          The Rovers Return
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/90 hover:text-brass-light text-sm tracking-wide uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+21698319652"
          className="hidden md:inline-block border border-brass text-brass-light px-5 py-2 text-sm uppercase tracking-wide hover:bg-brass hover:text-ink transition-colors"
        >
          Book a Table
        </a>

        <button
          className="md:hidden text-cream text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-forest-dark px-6 pb-6 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream text-sm uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+21698319652"
            className="border border-brass text-brass-light px-5 py-2 text-sm uppercase tracking-wide text-center"
          >
            Book a Table
          </a>
        </div>
      )}
    </header>
  );
}
