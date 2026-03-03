import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} | No Golf! No Life!`,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;

  return (
    <main>
      <article>
        <h1>{slug}</h1>
        {/* TODO: article content */}
      </article>
    </main>
  );
}
