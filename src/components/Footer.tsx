export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔑</span>
              <span className="text-white font-bold text-lg">
                QuickLock <span className="text-red-500">Miami</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              24/7 emergency locksmith service across Miami-Dade County.
              Licensed, insured, and ready to help any time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Home Lockout Service</li>
              <li>Car Lockout Service</li>
              <li>Office Lockout Service</li>
              <li>Key Stuck / Extraction</li>
              <li>Emergency Door Unlocking</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+13055550192"
                  className="text-amber-400 font-bold text-base hover:text-amber-300"
                >
                  (305) 555-0192
                </a>
              </li>
              <li>Miami, FL 33101</li>
              <li>
                <span className="text-green-400 font-medium">
                  Open 24/7 — Every Day
                </span>
              </li>
              <li>License #FL-LOCK-2847</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {year} QuickLock Miami. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
