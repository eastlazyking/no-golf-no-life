export type ChannelLevel = "新手" | "中階" | "職業愛好者" | "生活風格";

export type Channel = {
  id: string;
  name: string;
  avatar?: string;
  description: string; // one-liner style positioning
  levels: ChannelLevel[];
  featuredVideoId: string;
  channelUrl: string;
};
