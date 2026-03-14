import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/keys-in-lock.jpg"
        alt="Emergency locksmith Miami — keys in lock"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-green-600/90 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
          Technicians Available Now in Miami
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-shadow mb-6">
          Locked Out in Miami?{" "}
          <span className="text-amber-400">We&apos;ll Be There in 20 Minutes.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 text-shadow">
          Fast, affordable emergency locksmith service — available{" "}
          <strong className="text-white">24 hours a day, 7 days a week</strong> across
          Miami-Dade County. No hidden fees. Licensed &amp; insured.
        </p>

        {/* Main CTA */}
        <a
          href="tel:+13055550192"
          className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-xl sm:text-2xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl phone-pulse transition-colors duration-200 mb-10"
        >
          <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          CALL NOW — (305) 555-0192
        </a>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white text-sm sm:text-base">
          {[
            { icon: "✅", text: "Licensed & Insured" },
            { icon: "⚡", text: "20-Min Response" },
            { icon: "💲", text: "Upfront Pricing" },
            { icon: "⭐", text: "500+ 5-Star Reviews" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg"
            >
              <span>{badge.icon}</span>
              <span className="font-semibold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
