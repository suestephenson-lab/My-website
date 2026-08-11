const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-16">
      <div className="container-content grid sm:grid-cols-[1.2fr,0.8fr] gap-10">
        <div>
          <p className="font-serif text-lg font-semibold tracking-wide mb-3">
            SUE STEPHENSON
          </p>
          <p className="text-cream/70 max-w-sm mb-5 leading-relaxed">
            Fractional marketing, ecommerce and digital leadership for
            consumer brands. Based in London.
          </p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-cream/50 uppercase mb-4">
            Quick links
          </p>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-content mt-12 pt-8 rule-light">
        <p className="text-sm text-cream/50">© 2026 Sue Stephenson.</p>
      </div>
    </footer>
  );
}
