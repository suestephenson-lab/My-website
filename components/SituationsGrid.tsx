const situations = [
  {
    heading: "Growth has stalled",
    body: "Declining conversion, flat sales, or a channel mix that isn't earning its place. Needs a fast, data-led diagnosis and a plan.",
  },
  {
    heading: "You're mid-transformation",
    body: "A digital, ecommerce, or brand platform rebuild that needs senior hands-on leadership to actually land.",
  },
  {
    heading: "There's a leadership gap",
    body: "Between permanent hires, during a restructure, or ahead of a scale-up's next stage. Fractional leadership fills it without the wait or the overhead.",
  },
  {
    heading: "You're entering a new channel or market",
    body: "Launching ecommerce, a marketplace, a new region, or a new sales channel and need someone who's done it before.",
  },
];

export default function SituationsGrid() {
  return (
    <section className="py-20 md:py-28 rule">
      <div className="container-content">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-14 max-w-2xl">
          Does this describe your situation?
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {situations.map((item) => (
            <div key={item.heading} className="pt-6 rule">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-3">
                {item.heading}
              </h3>
              <p className="text-ink/70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
