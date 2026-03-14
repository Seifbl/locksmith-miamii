export default function UrgencyStrip() {
  return (
    <div className="bg-red-600 text-white text-center py-4 px-4">
      <p className="text-base sm:text-lg font-bold tracking-wide">
        🚨 Locked Out Right Now? Don&apos;t Wait —{" "}
        <a
          href="tel:+13055550192"
          className="underline underline-offset-2 hover:text-amber-300 transition-colors"
        >
          Call Us Immediately
        </a>
        . Technicians Standing By in Miami.
      </p>
    </div>
  );
}
