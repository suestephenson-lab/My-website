const expertise = [
  {
    title: "Ecommerce & Digital Transformation",
    body: "Platform rebuilds, conversion, UX/tech audits.",
    idealFor: "Brands whose digital experience is holding back growth.",
  },
  {
    title: "Performance & Brand Marketing",
    body: "Media strategy, ROAS, brand campaigns that work alongside performance.",
    idealFor: "Brands needing to unlock both awareness and volume.",
  },
  {
    title: "CRM & Lifecycle",
    body: "Email, database growth, marketing automation, segmentation.",
    idealFor: "Brands sitting on underused customer data.",
  },
  {
    title: "Interim & Fractional Leadership",
    body: "VP/Director-level cover during restructures, transitions, or scale-up growth phases.",
    idealFor: "Businesses with a leadership gap that can't wait for a permanent hire.",
  },
  {
    title: "New Channel & Market Launch",
    body: "Marketplaces, new sales channels, new geographies.",
    idealFor: "Brands expanding beyond their core channel.",
  },
  {
    title: "Team Leadership & Turnaround",
    body: "Building and re-motivating marketing, ecommerce and digital teams.",
    idealFor: "Businesses whose team needs direction as much as their strategy does.",
  },
];

export default function HowSheWorks() {
  return (
    <section id="expertise" className="py-20 md:py-28 rule">
      <div className="container-content">
        <div className="grid lg:grid-cols-[0.9fr,1.4fr] gap-12 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
              Diagnose. Rebuild. Lead. Deliver.
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md">
              Sue's method: get under the numbers fast, find the two or three
              things actually holding growth back, rebuild the plan and the
              team around them, then stay hands-on until the results show up
              in the P&amp;L.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {expertise.map((item) => (
              <div key={item.title} className="pt-6 rule">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink/70 leading-relaxed mb-3">
                  {item.body}
                </p>
                <p className="text-sm text-ink/60">
                  <span className="text-gold font-medium">Ideal for:</span>{" "}
                  {item.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
