export default function HowItWorks() {
  return (
    <section id="how" className="bg-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-bold">How it works</h2>
        <div className="grid gap-8 md:grid-cols-4 text-gray-400">
          <div>
            <h3 className="mb-2 font-semibold text-white">Free entry</h3>
            <p>Every user gets one free entry per draw.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Optional paid entries</h3>
            <p>Paid entries fund the prize pool.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Winner selection</h3>
            <p>Winner selected off-chain using a transparent process.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Prize payout</h3>
            <p>Prizes are paid directly in crypto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
