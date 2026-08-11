import Image from "next/image";

const stats = [
  { value: "£281m", caption: "Turnover led across 26 UK attractions" },
  { value: "+77%", caption: "DTC growth delivered in under 2 years" },
  { value: "63", caption: "Largest team led, end to end" },
  { value: "25+", caption: "Years in senior consumer marketing leadership" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container-content grid md:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-gold uppercase mb-6">
            Fractional &amp; Interim Marketing Leadership · London
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink mb-6">
            Marketing and ecommerce leadership for brands that need results,
            fast.
          </h1>
          <p className="text-base md:text-lg text-ink/75 leading-relaxed max-w-xl mb-10">
            Sue Stephenson is a VP and Director-level fractional marketing
            leader who has driven growth and digital transformation across
            Merlin Entertainments, Avon, Museum of Illusions, Donald Russell,
            TJX and Westfield &mdash; turning around underperforming channels
            and leading teams from 8 to 63 people.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#contact"
              className="bg-ink text-cream text-sm font-medium px-6 py-3.5 rounded-sm hover:bg-ink/90 transition-colors"
            >
              Discuss an engagement
            </a>
            <a
              href="#track-record"
              className="border border-ink text-ink text-sm font-medium px-6 py-3.5 rounded-sm hover:bg-ink hover:text-cream transition-colors"
            >
              See the track record
            </a>
          </div>

          <div className="rule pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.caption}>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-gold">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-ink/70 leading-snug">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none aspect-[4/5] rounded-sm overflow-hidden bg-ink/5 border border-ink/10">
          <Image
            src="/images/headshot.jpg"
            alt="Portrait of Sue Stephenson"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
