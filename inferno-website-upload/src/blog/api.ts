import { BlogPost } from "./types";
import { samplePosts } from "./samplePosts";

/**
 * Loads blog posts. In production these come from Airtable through a secure
 * Netlify Function (so the Airtable key is never exposed in the browser).
 * If that request fails, or during a local preview where functions aren't
 * running, we fall back to the bundled sample posts so the page still renders.
 */
export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("/.netlify/functions/blog");
    if (!res.ok) throw new Error(`Blog function returned ${res.status}`);
    const data = (await res.json()) as BlogPost[];
    if (!Array.isArray(data) || data.length === 0) {
      return sortByDate(samplePosts);
    }
    return sortByDate(data);
  } catch (err) {
    console.warn("Falling back to sample blog posts:", err);
    return sortByDate(samplePosts);
  }
}

export async function fetchPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
