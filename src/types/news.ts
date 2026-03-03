export type NewsTag = "賽事" | "球具" | "生活風格" | "規則";

export type NewsArticle = {
  slug: string;
  title: string;
  coverImage: string;
  date: string; // ISO 8601
  summary: string;
  content: string;
  tags: NewsTag[];
  relatedSlugs?: string[];
};
