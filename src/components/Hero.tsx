export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="mb-6 text-5xl font-bold leading-tight">
          Crypto-Powered Prize Draws
        </h1>
        <p className="mb-10 text-gray-400">
          Transparent. Simple. Fair.  
          One free entry per draw. Optional paid entries fund the prize pool.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#how"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black"
          >
            How it works
          </a>
          <span className="rounded-lg border border-white/20 px-6 py-3 text-gray-400">
            Draw coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
