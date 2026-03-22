const neighborhoods = [
  "Ballston",
  "Clarendon",
  "Courthouse",
  "Crystal City",
  "Pentagon City",
  "Rosslyn",
  "Shirlington",
  "Columbia Pike",
  "Cherrydale",
  "Lyon Village",
  "Ashton Heights",
  "Bluemont",
  "Westover",
  "East Falls Church",
  "Glencarlyn",
  "Fairlington",
  "Nauck",
  "Aurora Highlands",
  "Alcova Heights",
  "Arlington Ridge",
  "Penrose",
  "Douglas Park",
];

export default function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            We Serve All of Arlington and Surrounding Areas
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Locked out anywhere in Arlington County? We can reach you fast.
            Call us to confirm coverage in your exact area.
          </p>
        </div>

        {/* Neighborhood grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {neighborhoods.map((n) => (
            <span
              key={n}
              className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-sm shadow-sm hover:border-red-300 hover:text-red-700 transition-colors duration-150"
            >
              📍 {n}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-4 text-sm">
            Don&apos;t see your area?{" "}
            <a
              href="tel:+17032440559"
              className="text-red-600 font-semibold underline underline-offset-2 hover:text-red-800"
            >
              Call us anyway
            </a>{" "}
            — we likely cover it.
          </p>
          <a
            href="tel:+17032440559"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call (703) 244-0559 — We Come to You
          </a>
        </div>
      </div>
    </section>
  );
}
