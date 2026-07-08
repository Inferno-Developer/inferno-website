export interface BlogPost {
  /** URL-friendly identifier, e.g. "growing-on-onlyfans" */
  slug: string;
  title: string;
  /** Short summary shown on the blog index cards */
  excerpt: string;
  /** Full article body, written in Markdown */
  content: string;
  /** Optional cover image URL */
  coverImage?: string;
  author?: string;
  /** ISO date string, e.g. "2026-07-08" */
  date: string;
  tags?: string[];
}
