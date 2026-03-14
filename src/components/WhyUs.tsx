const reasons = [
  {
    icon: "⚡",
    title: "Fastest Response in Miami",
    desc: "Average 20-minute arrival across all Miami-Dade neighborhoods — day or night.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden fees. We quote a flat rate before we start — you approve it first.",
  },
  {
    icon: "🔐",
    title: "Licensed & Insured",
    desc: "Fully licensed Florida locksmiths. We carry ID and credentials to every job.",
  },
  {
    icon: "📱",
    title: "Available 24/7/365",
    desc: "Midnight, holidays, weekends — a real person answers every call, every time.",
  },
  {
    icon: "🛡️",
    title: "No-Damage Guarantee",
    desc: "We use professional non-destructive techniques. Your lock and door stay intact.",
  },
  {
    icon: "🏆",
    title: "500+ 5-Star Reviews",
    desc: "Hundreds of Miami residents and businesses trust QuickLock every year.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Miami Trusts QuickLock
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            When you&apos;re locked out, you need someone fast, honest, and professional.
            That&apos;s us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors duration-200"
            >
              <div className="text-3xl flex-shrink-0 mt-0.5">{r.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:+13055550192"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call (305) 555-0192 Now
          </a>
        </div>
      </div>
    </section>
  );
}
