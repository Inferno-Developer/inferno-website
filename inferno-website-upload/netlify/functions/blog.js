// Serves published blog posts from Airtable.
//
// The Airtable token is read from the AIRTABLE_TOKEN environment variable
// (set in Netlify → Site settings → Environment variables). It is NEVER sent
// to the browser — the browser only ever sees the JSON this function returns.
//
// Expected Airtable table: "Blog" in base AIRTABLE_BASE_ID with fields:
//   Title      (Single line text)
//   Slug       (Single line text)   e.g. "growing-on-onlyfans"
//   Excerpt    (Long text)
//   Content    (Long text — Markdown)
//   Cover      (Attachment OR URL text)   optional
//   Author     (Single line text)         optional
//   Date       (Date)
//   Tags       (Multiple select OR text)  optional
//   Published  (Checkbox)   only checked rows appear on the site

const BASE_ID = process.env.AIRTABLE_BASE_ID || "appZ57oHkxygjxP2t";
const TABLE = "Blog";

exports.handler = async () => {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    return json(500, { error: "AIRTABLE_TOKEN is not configured." });
  }

  try {
    const url =
      `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}` +
      `?filterByFormula=${encodeURIComponent("{Published}=1")}`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const detail = await res.text();
      return json(502, { error: "Airtable request failed", detail });
    }

    const data = await res.json();
    const posts = (data.records || [])
      .map(mapRecord)
      .filter((p) => p.slug && p.title)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // Cache at the edge for a minute so the site is fast but new posts
        // still appear quickly.
        "Cache-Control": "public, max-age=60",
      },
      body: JSON.stringify(posts),
    };
  } catch (err) {
    return json(500, { error: "Unexpected error", detail: String(err) });
  }
};

function mapRecord(record) {
  const f = record.fields || {};
  return {
    slug: f.Slug || "",
    title: f.Title || "",
    excerpt: f.Excerpt || "",
    content: f.Content || "",
    coverImage: coverUrl(f.Cover),
    author: f.Author || "Inferno Agency",
    date: f.Date || new Date().toISOString().slice(0, 10),
    tags: normalizeTags(f.Tags),
  };
}

function coverUrl(cover) {
  if (!cover) return undefined;
  if (Array.isArray(cover) && cover.length > 0) return cover[0].url; // attachment
  if (typeof cover === "string") return cover; // plain URL
  return undefined;
}

function normalizeTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return String(tags)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
