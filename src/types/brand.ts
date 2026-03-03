export type BrandCategory = "clubs" | "bags" | "apparel" | "shoes" | "accessories";

export type BeginnerLevel = "是" | "否" | "進階";

export type Brand = {
  id: string;
  name: string;
  logo?: string;
  category: BrandCategory;
  tags: string[]; // e.g. ["#職人", "#傳統"]
  description: string; // one-liner
  priceRange: string; // e.g. "NT$15,000–50,000"
  beginnerFriendly: BeginnerLevel;
  websiteUrl: string;
};
