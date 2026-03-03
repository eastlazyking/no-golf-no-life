import Link from "next/link";

const navLinks = [
  { href: "/news", label: "新聞" },
  { href: "/learn", label: "學習路徑" },
  { href: "/brands", label: "品牌地圖" },
  { href: "/channels", label: "頻道推薦" },
];

export default function Header() {
  return (
    <header className="border-b border-black">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide uppercase">
          No Golf! No Life!
        </Link>
        <nav className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-sm font-medium hover:underline underline-offset-4"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
