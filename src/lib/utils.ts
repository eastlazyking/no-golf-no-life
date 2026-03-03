/** 日期格式化：ISO → "2026 年 3 月 4 日" */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/** YouTube embed URL */
export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

/** YouTube thumbnail URL */
export function youtubeThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
