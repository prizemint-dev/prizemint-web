export default function FAQ() {
  return (
    <section id="faq" className="bg-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
        <div className="space-y-6 text-gray-400">
          <p>
            <strong className="text-white">Is this gambling?</strong><br />
            No. Each draw includes a free entry option.
          </p>
          <p>
            <strong className="text-white">Is crypto required?</strong><br />
            Only for optional paid entries.
          </p>
          <p>
            <strong className="text-white">Is this on-chain?</strong><br />
            Phase 1 operates fully off-chain.
          </p>
        </div>
      </div>
    </section>
  );
}
