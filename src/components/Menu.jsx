const CATEGORIES = [
  {
    name: "To Start",
    items: [
      { name: "Prawn Cocktail", note: "the classic, done properly", popular: true },
      { name: "Garlic Mushrooms", note: "on toasted sourdough" },
      { name: "Soup of the Day", note: "ask your server" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Chicken Burger", note: "hand-formed, brioche bun", popular: true },
      { name: "Steak & Ale Pie", note: "shortcrust, mash, gravy" },
      { name: "Chicken Tikka Curry", note: "medium spice, pilau rice" },
      { name: "Homemade Lasagne", note: "beef ragù, béchamel" },
    ],
  },
  {
    name: "Sweets",
    items: [
      { name: "Sticky Toffee Pudding", note: "warm toffee sauce" },
      { name: "Cuppa Tea", note: "in a proper mug, not a cup" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-forest-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-brass-light text-xs mb-4">
            On The Menu
          </p>
          <h2 className="text-4xl md:text-5xl">Home cooking, no shortcuts</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-brass-light text-xl mb-5 pb-3 border-b border-brass/30">
                {cat.name}
              </h3>
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span className="text-[10px] uppercase tracking-wide bg-brass text-ink px-2 py-0.5">
                            Popular
                          </span>
                        )}
                      </p>
                      <p className="text-cream/50 text-sm italic">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/50 text-sm mt-16">
          Full menu available in the dining room and on our Facebook page · Owner: replace
          this list with the current menu and prices.
        </p>
      </div>
    </section>
  );
}
