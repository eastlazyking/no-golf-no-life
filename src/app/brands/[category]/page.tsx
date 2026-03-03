import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string }>;
};

const categoryLabels: Record<string, string> = {
  clubs: "球桿",
  bags: "球袋",
  apparel: "服飾",
  shoes: "球鞋",
  accessories: "配件",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category] ?? category;
  return {
    title: `高爾夫${label}品牌推薦 | No Golf! No Life!`,
    description: `新手適合的高爾夫${label}品牌整理，附風格標籤與價格區間。`,
  };
}

export default async function BrandCategoryPage({ params }: Props) {
  const { category } = await params;
  const label = categoryLabels[category] ?? category;

  return (
    <main>
      <h1>{label}</h1>
      {/* TODO: brand cards for this category */}
    </main>
  );
}
