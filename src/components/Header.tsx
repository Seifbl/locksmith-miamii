export default function Header() {
  return (
    <>
      {/* Desktop/Tablet sticky header */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-2xl">🔑</span>
              <span className="text-white font-bold text-xl tracking-tight">
                QuickLock <span className="text-red-500">Miami</span>
              </span>
            </div>

            {/* Center tagline — hidden on small screens */}
            <div className="hidden md:block text-center">
              <p className="text-gray-300 text-sm font-medium">
                Available{" "}
                <span className="text-green-400 font-bold">24/7</span> &mdash;
                No Call-Out Fee &mdash; Licensed &amp; Insured
              </p>
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+13055550192"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (305) 555-0192
            </a>
          </div>
        </div>
      </header>

      {/* Mobile sticky bottom call button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="tel:+13055550192"
          className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg py-4 w-full phone-pulse"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          TAP TO CALL — (305) 555-0192
        </a>
      </div>
    </>
  );
}
