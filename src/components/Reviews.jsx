const REVIEWS = [
  {
    name: "Matthew Beadie",
    meta: "4 reviews",
    time: "2 months ago",
    text:
      "By far the best food we've had while abroad. Staff are friendly, helpful and we have actually kept in touch!",
  },
  {
    name: "Fiona Moore",
    meta: "Local Guide · 90 reviews",
    time: "3 months ago",
    text:
      "Great choice of food which can be adapted to your preference. Service and atmosphere amazing. Very friendly and decently priced.",
  },
  {
    name: "Bee Ma",
    meta: "Local Guide · 18 reviews",
    time: "8 months ago",
    text:
      "Lovely curries and lasagne, all home made. A lovely cuppa tea in a real mug! All the staff were very welcoming, polite and cheerful.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-oxblood text-xs mb-4">
            What Guests Say
          </p>
          <h2 className="text-4xl md:text-5xl text-ink mb-4">4.3 stars, 393 reviews</h2>
          <p className="text-ink/60">Friendly staff, English food, garlic mushrooms — apparently we're known for all three.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-oxblood/15 p-7 relative"
            >
              <div className="absolute top-0 left-7 -translate-y-1/2 bg-brass text-ink text-xs uppercase tracking-wide px-3 py-1">
                ★★★★★
              </div>
              <p className="text-ink/80 leading-relaxed mb-6 mt-3">"{r.text}"</p>
              <div className="brass-rule mb-4" />
              <p className="text-ink font-medium">{r.name}</p>
              <p className="text-ink/50 text-sm">{r.meta} · {r.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
