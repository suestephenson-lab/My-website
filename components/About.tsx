import Image from "next/image";

const highlights = [
  "Led teams from 8 to 63 people across marketing, ecommerce, CRM and digital product.",
  "Delivered double-digit growth and digital transformation across £11m–£281m turnover businesses.",
  "Worked across attractions, cosmetics, premium DTC retail, real estate/retail marketplaces, and marketing agency environments.",
  "Available on a fractional or interim basis.",
];

const credentials = [
  "CIM Diploma in Marketing",
  "BA (Hons) Business Studies (2:1), University of Sheffield",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 rule">
      <div className="container-content grid md:grid-cols-[0.8fr,1.2fr] gap-12 md:gap-16 items-start">
        <div className="relative w-full max-w-xs aspect-square rounded-sm overflow-hidden bg-ink/5 border border-ink/10 mx-auto md:mx-0">
          <Image
            src="/images/headshot.jpg"
            alt="Portrait of Sue Stephenson"
            fill
            sizes="(min-width: 768px) 25vw, 60vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-gold uppercase mb-6">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
            Two decades leading marketing where it has to work.
          </h2>
          <p className="text-ink/70 leading-relaxed mb-10 max-w-2xl">
            From Alders and Waterstones through Haygarth on the agency side,
            and on through Westfield, TJX Europe, Donald Russell, Avon and
            Merlin Entertainments to Museum of Illusions, Sue has built a
            career spanning attractions, cosmetics, premium DTC retail, and
            real estate and retail marketplaces &mdash; with a consistent
            outcome each time: growth, transformation, and stronger teams.
          </p>

          <ul className="space-y-4 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-ink/80 leading-relaxed">
                <span className="text-gold mt-1">&mdash;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 rule">
            <p className="text-xs font-semibold tracking-[0.15em] text-ink/50 uppercase mb-3">
              Credentials
            </p>
            <ul className="space-y-1 text-ink/70">
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
