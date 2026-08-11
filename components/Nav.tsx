const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/10">
      <nav className="container-content flex items-center justify-between h-20">
        <a
          href="#top"
          className="font-serif text-lg md:text-xl font-semibold tracking-wide text-ink"
        >
          SUE STEPHENSON
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-ink/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-ink text-cream text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-ink/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <a
          href="#contact"
          className="md:hidden bg-ink text-cream text-sm font-medium px-4 py-2 rounded-sm hover:bg-ink/90 transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
