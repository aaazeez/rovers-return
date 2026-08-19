export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-signage text-2xl text-brass-light">The Rovers Return</p>
        <p className="text-sm text-center">
          Medina of Yasmine Hammamet · 98 319 652 · Dine-in & Delivery
        </p>
        <p className="text-xs">© {new Date().getFullYear()} Rovers Return Restaurant</p>
      </div>
    </footer>
  );
}
