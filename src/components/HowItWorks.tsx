import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Call Us",
    desc: "Call our Arlington number anytime. Tell us your location and what happened. No waiting on hold — a real person picks up.",
    color: "bg-red-600",
  },
  {
    number: "2",
    title: "We Dispatch",
    desc: "A licensed technician is sent to you immediately — usually arriving in under 20 minutes anywhere in Arlington.",
    color: "bg-amber-500",
  },
  {
    number: "3",
    title: "You're In",
    desc: "We unlock your door, car, or office fast and without damage. You're back inside — problem solved.",
    color: "bg-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-gray-900 text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-2">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              How Our Arlington Locksmith Service Works
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Getting back inside takes 3 simple steps. Most Arlington customers are
              unlocked within 30 minutes of calling.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div
                    className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+17032440559"
              className="inline-flex items-center gap-2 mt-10 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg px-8 py-4 rounded-xl transition-colors duration-200 phone-pulse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Start Step 1 — Call Now
            </a>
          </div>

          {/* Right: Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden">
              <Image
                src="/images/commercial-bar.jpg"
                alt="Commercial lockout service Arlington"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden">
              <Image
                src="/images/push-bar.jpg"
                alt="Push bar door lockout Arlington"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden col-span-2">
              <Image
                src="/images/door-knob.jpg"
                alt="Residential lockout Arlington"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold text-sm">
                  Non-destructive entry — your lock stays intact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
