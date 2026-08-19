export default function Story() {
  return (
    <section id="story" className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[1fr,1.3fr] gap-14 items-start">
        <div className="aspect-square bg-forest/10 border border-oxblood/20 flex items-center justify-center paper-grain">
          <p className="text-ink/50 text-sm px-6 text-center">
            [ replace with photo — owner in the kitchen, or the dining room's welcome ]
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.25em] text-oxblood text-xs mb-4">Our Story</p>
          <h2 className="text-4xl md:text-5xl mb-6 text-ink">
            Started because the hotel food<br className="hidden md:block" /> just wasn't cutting it.
          </h2>
          <p className="text-ink/75 mb-4 leading-relaxed">
            Rovers Return began as a simple idea: homesick travellers in Yasmine Hammamet
            deserved a proper plate of food and a familiar face to serve it. Every dish is
            still made the same way it always has been — by hand, in small batches, with
            no shortcuts.
          </p>
          <p className="text-ink/75 leading-relaxed">
            Nestled just inside the medina, the dining room has become something of a
            home-away-from-home for regulars who return year after year — many of whom
            we now count as friends.
          </p>

          <div className="brass-rule my-8" />

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-signage text-3xl text-oxblood">393+</p>
              <p className="text-xs uppercase tracking-wide text-ink/60 mt-1">Reviews</p>
            </div>
            <div>
              <p className="font-signage text-3xl text-oxblood">4.3</p>
              <p className="text-xs uppercase tracking-wide text-ink/60 mt-1">Average rating</p>
            </div>
            <div>
              <p className="font-signage text-3xl text-oxblood">2</p>
              <p className="text-xs uppercase tracking-wide text-ink/60 mt-1">Dine-in & delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
