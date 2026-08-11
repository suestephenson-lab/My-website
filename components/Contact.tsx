"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 rule">
      <div className="container-content grid md:grid-cols-[0.9fr,1.1fr] gap-12 md:gap-16">
        <div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-gold uppercase mb-6">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
            Discuss an engagement.
          </h2>
          <p className="text-ink/70 leading-relaxed max-w-md">
            Sue works with a small number of clients at a time. If the
            situation needs senior marketing or ecommerce leadership fast,
            this is the right conversation to have. Initial conversations
            are confidential.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold tracking-[0.1em] text-ink/60 uppercase mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full bg-transparent border-b border-ink/30 py-2.5 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="organisation"
                className="block text-xs font-semibold tracking-[0.1em] text-ink/60 uppercase mb-2"
              >
                Organisation
              </label>
              <input
                id="organisation"
                type="text"
                name="organisation"
                className="w-full bg-transparent border-b border-ink/30 py-2.5 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors"
                placeholder="Company name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold tracking-[0.1em] text-ink/60 uppercase mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full bg-transparent border-b border-ink/30 py-2.5 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="engagement"
              className="block text-xs font-semibold tracking-[0.1em] text-ink/60 uppercase mb-2"
            >
              Nature of the engagement
            </label>
            <textarea
              id="engagement"
              name="engagement"
              rows={4}
              className="w-full bg-transparent border-b border-ink/30 py-2.5 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="A short summary of what you need help with"
            />
          </div>

          <button
            type="submit"
            className="bg-ink text-cream text-sm font-medium px-6 py-3.5 rounded-sm hover:bg-ink/90 transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
