export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 text-center text-gray-500">
      <p>© {new Date().getFullYear()} PrizeMint</p>
      <p className="mt-2">Contact: support@prizemint.io</p>
    </footer>
  );
}
