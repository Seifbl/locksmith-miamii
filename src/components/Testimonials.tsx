"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can you respond to an emergency lockout in Arlington?",
    answer:
      "Our average response time is 20 minutes or less anywhere in Arlington County. We have mobile technicians stationed throughout Ballston, Clarendon, Crystal City, Rosslyn, and surrounding neighborhoods ready to dispatch 24/7 — including nights, weekends, and holidays.",
  },
  {
    question: "How much does a lockout service cost?",
    answer:
      "We provide upfront flat-rate pricing before any work begins — no hidden fees, no surprise charges, and no call-out fee. The exact cost depends on the type of lockout (residential, commercial, storefront, or auto). Call (703) 244-0559 for a free, no-obligation quote.",
  },
  {
    question: "Are you available 24 hours a day, 7 days a week?",
    answer:
      "Yes. arlington247lockrepair operates 24 hours a day, 7 days a week, 365 days a year. Whether it's 2am on a Tuesday or Christmas morning, a real person will answer your call and dispatch a technician immediately.",
  },
  {
    question: "Will you damage my door or lock during a lockout?",
    answer:
      "No. We use professional non-destructive entry techniques on every job. Your lock, door, and frame stay intact. We back this up with a no-damage guarantee. If any damage occurs during our service, we cover the repair at no cost to you.",
  },
  {
    question: "Do you service storefront and commercial locks?",
    answer:
      "Absolutely. We specialize in commercial and storefront lockouts including glass storefront door locks, panic bars, push bars, access control systems, high-security deadbolts, and master key systems. We serve offices, retail shops, restaurants, and warehouses across Arlington.",
  },
  {
    question: "Can you replace door hardware on the spot?",
    answer:
      "Yes. Our technicians carry a full inventory of commercial and residential door hardware including knobs, levers, deadbolts, hinges, and door closers. In most cases we can replace your hardware in a single visit — no need to schedule a follow-up.",
  },
  {
    question: "Do you install and repair emergency exit doors?",
    answer:
      "Yes. We install, repair, and inspect emergency exit doors, panic hardware, and fire-rated door assemblies. We ensure your doors meet local fire codes, ADA requirements, and Virginia building regulations.",
  },
  {
    question: "Are your locksmiths licensed and insured?",
    answer:
      "Yes. Every technician on our team is fully licensed in the state of Virginia, background-checked, and carries proof of insurance. We bring our credentials to every job so you can verify before we start.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of Arlington County and surrounding areas including Ballston, Clarendon, Courthouse, Crystal City, Pentagon City, Rosslyn, Shirlington, Columbia Pike, Cherrydale, Lyon Village, Bluemont, Westover, Fairlington, and more. Call us to confirm coverage for your location.",
  },
  {
    question: "Do I need to provide ID to get a lockout service?",
    answer:
      "For your safety and ours, we may ask for proof of residence or authorization (such as a photo ID, lease, or utility bill) before performing a lockout service. This protects you and ensures we're helping the rightful owner or tenant.",
  },
];

export default function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white" id="testimonials">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t see yours below,
            call us at{" "}
            <a
              href="tel:+17032440559"
              className="text-red-600 font-semibold hover:text-red-800"
            >
              (703) 244-0559
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-red-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
