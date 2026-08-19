export default function SundayRoast() {
  return (
    <section id="sunday-roast" className="bg-oxblood-dark text-cream relative overflow-hidden">
      <div className="absolute inset-0 paper-grain opacity-30" />
      <div className="max-w-6xl mx-auto px-6 py-24 relative grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <p className="uppercase tracking-[0.25em] text-brass-light text-xs mb-4">
            Every Sunday
          </p>
          <h2 className="text-4xl md:text-5xl mb-6">The Sunday Roast</h2>
          <p className="text-cream/80 leading-relaxed mb-6 max-w-md">
            Roast beef, all the trimmings, Yorkshire pudding the size of your
            face, and gravy made properly — not from a packet. It's the dish
            people plan their week around, and the one guests mention most.
          </p>
          <blockquote className="border-l-2 border-brass pl-5 italic text-cream/70 mb-8">
            "Came here a few times as our hotel food was disgusting. The Sunday
            Roast was amazing."
          </blockquote>
          <a
            href="tel:+21698319652"
            className="inline-block bg-brass text-ink px-7 py-3 font-medium uppercase tracking-wide text-sm hover:bg-brass-light transition-colors"
          >
            Reserve for Sunday
          </a>
        </div>

        <div className="order-1 md:order-2 aspect-[4/3] border border-brass/40 flex items-center justify-center">
          <p className="text-cream/50 text-sm px-6 text-center">
            [ replace with photo — the roast dinner plated ]
          </p>
        </div>
      </div>
    </section>
  );
}
