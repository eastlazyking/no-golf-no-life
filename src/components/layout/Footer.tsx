import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black mt-24">
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-black text-sm tracking-tight uppercase">
          No Golf! No Life!
        </p>
        <nav className="flex gap-6 text-xs">
          <Link href="/news" className="hover:underline">新聞</Link>
          <Link href="/learn" className="hover:underline">學習路徑</Link>
          <Link href="/brands" className="hover:underline">品牌地圖</Link>
          <Link href="/channels" className="hover:underline">頻道推薦</Link>
        </nav>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} No Golf! No Life!
        </p>
      </div>
    </footer>
  );
}
