const reviews = [
  {
    name: "Maria G.",
    location: "Brickell, Miami",
    rating: 5,
    text: "I was locked out of my condo at 11pm. QuickLock arrived in 18 minutes and had me inside within 5. I was panicking and they were so calm and professional. Absolute lifesavers!",
    service: "Home Lockout",
  },
  {
    name: "James T.",
    location: "Coral Gables, Miami",
    rating: 5,
    text: "Keys locked in my car outside the Miracle Mile on a hot afternoon. Tech arrived faster than I expected, very professional and explained everything before starting. Incredibly affordable too.",
    service: "Car Lockout",
  },
  {
    name: "Sofia R.",
    location: "Doral, Miami",
    rating: 5,
    text: "Locked out of my office on a Monday morning with a team waiting inside. They came in under 20 minutes, zero damage to the door or lock. Will save this number forever.",
    service: "Office Lockout",
  },
  {
    name: "Carlos M.",
    location: "Hialeah, Miami",
    rating: 5,
    text: "Key snapped off in my front door lock at midnight. They extracted it cleanly and even re-keyed the lock on the spot. Quick, honest pricing — exactly what you need in an emergency.",
    service: "Key Extraction",
  },
  {
    name: "Ashley W.",
    location: "Miami Beach",
    rating: 5,
    text: "First time being locked out and I was stressed. Called QuickLock and the person on the phone was reassuring and the tech arrived in 15 minutes. 10/10 would recommend to anyone in Miami.",
    service: "Home Lockout",
  },
  {
    name: "Roberto P.",
    location: "Kendall, Miami",
    rating: 5,
    text: "Had an emergency at my retail store — staff locked inside after closing. QuickLock handled the commercial push bar perfectly. Real professionals. Saved us a lot of stress.",
    service: "Commercial Lockout",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Real Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Miami Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <StarRating count={5} />
            <span className="font-bold text-gray-900">4.9</span>
            <span>— Based on 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
                <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                  {review.service}
                </span>
              </div>
              <StarRating count={review.rating} />
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
