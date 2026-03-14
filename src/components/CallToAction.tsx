export default function CallToAction() {
  return (
    <section className="py-20 sm:py-24 bg-red-600 text-white text-center" id="call-now">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-5xl mb-6">🔑</div>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Still Locked Out in Miami?
          <br />
          Call Us Right Now.
        </h2>
        <p className="text-red-100 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Don&apos;t wait outside. Our Miami locksmiths are ready to dispatch to
          your location right now — 24 hours a day, 7 days a week.
        </p>

        <a
          href="tel:+13055550192"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-2xl sm:text-3xl px-10 sm:px-14 py-5 sm:py-6 rounded-2xl phone-pulse transition-colors duration-200"
        >
          <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          (305) 555-0192 — Tap to Call
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-red-100 text-sm sm:text-base">
          <span>✅ Licensed Miami Locksmith</span>
          <span>⚡ 24/7 Emergency Service</span>
          <span>🏃 Average 20-Min Response</span>
          <span>💰 Upfront Flat Pricing</span>
        </div>
      </div>
    </section>
  );
}
