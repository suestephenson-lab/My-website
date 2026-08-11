const results = [
  {
    value: "+1,566%",
    caption: "Revenue growth from a rebuilt email sign-up incentive (Museum of Illusions)",
  },
  {
    value: "+88%",
    caption: "ROAS growth YoY (Avon Cosmetics)",
  },
  {
    value: "0.5pt",
    caption: "Market share gained YoY (Merlin Entertainments)",
  },
  {
    value: "+272%",
    caption: "Growth in new customer volume, with 45% lower CPA (Donald Russell)",
  },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="bg-ink text-cream py-20 md:py-28">
      <div className="container-content">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-14 max-w-2xl">
          A career built on measurable turnarounds.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {results.map((item) => (
            <div key={item.caption} className="pt-6 rule-light">
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold">
                {item.value}
              </div>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-cream/90">
            &ldquo;Testimonial placeholder &mdash; add a LinkedIn
            recommendation here.&rdquo;
          </p>
          <p className="mt-5 text-sm text-cream/60 tracking-wide">
            &mdash; Title · Company
          </p>
        </div>
      </div>
    </section>
  );
}
