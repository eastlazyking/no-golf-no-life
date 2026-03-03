import type { Metadata } from "next";

type Props = {
  params: Promise<{ stage: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stage } = await params;
  return {
    title: `${stage} | 高爾夫新手學習路徑 | No Golf! No Life!`,
  };
}

export default async function StagePage({ params }: Props) {
  const { stage } = await params;

  return (
    <main>
      <h1>{stage}</h1>
      {/* TODO: stage content + YouTube embed + CTA */}
    </main>
  );
}
