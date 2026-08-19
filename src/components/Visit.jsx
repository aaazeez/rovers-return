export default function Visit() {
  return (
    <section id="visit" className="bg-forest-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">
        <div>
          <p className="uppercase tracking-[0.25em] text-brass-light text-xs mb-4">
            Find Us
          </p>
          <h2 className="text-4xl md:text-5xl mb-8">Visit The Rovers Return</h2>

          <dl className="space-y-6">
            <div>
              <dt className="text-brass-light text-xs uppercase tracking-wide mb-1">Address</dt>
              <dd className="text-cream/85">
                Medina of Yasmine Hammamet, Yasmine Hammamet 8056, Tunisia
              </dd>
            </div>
            <div>
              <dt className="text-brass-light text-xs uppercase tracking-wide mb-1">Hours</dt>
              <dd className="text-cream/85">Opens 10 AM daily · check ahead for evening service</dd>
            </div>
            <div>
              <dt className="text-brass-light text-xs uppercase tracking-wide mb-1">Phone</dt>
              <dd className="text-cream/85">
                <a href="tel:+21698319652" className="hover:text-brass-light">98 319 652</a>
              </dd>
            </div>
            <div>
              <dt className="text-brass-light text-xs uppercase tracking-wide mb-1">Average spend</dt>
              <dd className="text-cream/85">TND 30–90 per person</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="tel:+21698319652"
              className="bg-brass text-ink px-7 py-3 font-medium uppercase tracking-wide text-sm hover:bg-brass-light transition-colors"
            >
              Call to Book
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rovers+Return+Restaurant+Yasmine+Hammamet"
              target="_blank"
              rel="noreferrer"
              className="border border-brass text-brass-light px-7 py-3 font-medium uppercase tracking-wide text-sm hover:bg-brass hover:text-ink transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="aspect-[4/3] md:aspect-auto border border-brass/40 overflow-hidden">
          <iframe
            title="Rovers Return location map"
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Rovers+Return+Restaurant+Yasmine+Hammamet&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
