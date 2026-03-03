import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No Golf! No Life! — 高爾夫新手入門導覽",
  description: "給對高爾夫感興趣的新手，一個了解這個生活方式的入口。新聞情報、學習路徑、品牌地圖，一站搞定。",
};

export default function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6">
      {/* ── Hero ── */}
      <section className="py-24 border-b border-black">
        <p className="font-sans text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">
          No Golf! No Life!
        </p>
        <h1 className="font-display text-8xl md:text-[12rem] leading-none uppercase mb-8">
          給新手的<br />
          <span className="highlight-expand cursor-default">高爾夫</span><br />
          入口
        </h1>
        <p className="font-sans text-lg max-w-md mb-10 text-gray-600">
          你不缺資訊，缺的是「有人幫你整理好一條路」。
        </p>
        <Link
          href="/learn"
          className="font-sans inline-block bg-black text-white font-bold px-8 py-4 hover:bg-accent hover:text-black transition-colors"
        >
          開始學習 →
        </Link>
      </section>

      {/* ── 最新新聞 ── */}
      <section className="py-16 border-b border-black">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-5xl uppercase">最新情報</h2>
          <Link href="/news" className="font-sans text-sm font-medium hover:underline">
            全部新聞 →
          </Link>
        </div>
        <p className="font-sans text-gray-400 text-sm">（文章資料待接入）</p>
      </section>

      {/* ── 學習路徑入口 ── */}
      <section className="py-16 border-b border-black">
        <h2 className="font-display text-5xl uppercase mb-4">新手學習路徑</h2>
        <p className="font-sans text-gray-600 mb-8">三個階段，從規則到上場。</p>
        <Link
          href="/learn"
          className="font-sans inline-block border border-black font-bold px-8 py-4 hover:bg-black hover:text-white transition-colors"
        >
          查看學習路徑
        </Link>
      </section>

      {/* ── 品牌地圖 ── */}
      <section className="py-16 border-b border-black">
        <h2 className="font-display text-5xl uppercase mb-4">品牌地圖</h2>
        <p className="font-sans text-gray-600 mb-8">新手該認識的球桿、服飾、配件品牌。</p>
        <Link
          href="/brands"
          className="font-sans inline-block border border-black font-bold px-8 py-4 hover:bg-black hover:text-white transition-colors"
        >
          探索品牌
        </Link>
      </section>

      {/* ── 頻道推薦 ── */}
      <section className="py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-5xl uppercase">頻道推薦</h2>
          <Link href="/channels" className="font-sans text-sm font-medium hover:underline">
            全部頻道 →
          </Link>
        </div>
        <p className="font-sans text-gray-400 text-sm">（頻道資料待填入）</p>
      </section>
    </main>
  );
}
