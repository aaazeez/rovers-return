export default function Hero() {
  return (
    <section id="top" className="relative bg-forest-dark text-cream overflow-hidden">
      {/* subtle brass rule pattern along top, evokes a pub sign frame */}
      <div className="absolute top-20 inset-x-0 h-px brass-rule opacity-60" />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24 md:pt-48 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-brass-light text-xs mb-6">
            Yasmine Hammamet · Medina · Est. locally loved
          </p>
          <h1 className="text-5xl md:text-6xl leading-[1.05] font-semibold mb-6">
            A proper English kitchen,
            <span className="text-brass-light"> a long way from home.</span>
          </h1>
          <p className="text-cream/80 text-lg mb-8 max-w-md font-body italic">
            Home-cooked classics, a Sunday roast worth planning your week around,
            and the kind of welcome you don't forget. Dine-in or delivered.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="tel:+21698319652"
              className="bg-brass text-ink px-7 py-3 font-medium uppercase tracking-wide text-sm hover:bg-brass-light transition-colors"
            >
              Book a Table
            </a>
            <div className="flex items-center gap-2 text-cream/80 text-sm">
              <span className="text-brass-light text-base">★ 4.3</span>
              <span>· 393 reviews · TND 30–90pp</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-oxblood-dark border border-brass/40 flex items-center justify-center paper-grain">
            {/* Owner: swap this for a real photo of the Sunday roast / dining room */}
            <div className="text-center px-8">
              <p className="font-signage text-brass-light text-2xl mb-2">Sunday Roast</p>
              <p className="text-cream/60 text-sm">
                [ replace with photograph — roast dinner plated, warm lighting ]
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-brass text-ink px-5 py-3 text-sm font-medium hidden sm:block">
            "By far the best food we've had while abroad."
          </div>
        </div>
      </div>
    </section>
  );
}
