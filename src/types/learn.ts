export type YoutubeVideo = {
  videoId: string;
  title: string;
  channelName: string;
};

export type LearnStage = {
  slug: string; // e.g. "stage-1"
  stageNumber: number;
  title: string;
  description: string;
  content: string;
  videos: YoutubeVideo[];
};
