import { BlogPost } from "./types";

/**
 * These sample posts are ONLY a fallback. The live site loads real posts from
 * Airtable (via the /.netlify/functions/blog function). If that call ever fails
 * — or when running a local preview with no functions available — the site
 * shows these instead so the Blog page is never empty.
 *
 * You should NOT need to edit this file to publish articles. Publishing happens
 * by adding a row to the "Blog" table in Airtable (or by sending the article to
 * your assistant, who adds it for you).
 */
export const samplePosts: BlogPost[] = [
  {
    slug: "welcome-to-the-inferno-blog",
    title: "Welcome to the Inferno Agency Blog",
    excerpt:
      "A quick look at what this space is for: creator growth, industry insight, and the strategies we use to help our models win.",
    coverImage:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Inferno Agency",
    date: "2026-07-08",
    tags: ["Agency", "Announcements"],
    content: `Welcome to the official **Inferno Agency** blog.

This is where we'll share what actually works in creator management — no fluff, no recycled advice. Expect breakdowns of growth strategy, revenue optimization, and the day-to-day systems that help our creators scale.

## Why we're doing this

Most agencies keep their playbook hidden. We'd rather build trust in the open. If you're a creator deciding who to work with, we want you to see how we think before you ever fill out an application.

## What to expect

- Practical growth tactics you can use today
- Honest takes on the industry
- Behind-the-scenes looks at how we manage top creators

Stay tuned — we're just getting started.`,
  },
  {
    slug: "three-ways-creators-leave-money-on-the-table",
    title: "3 Ways Creators Leave Money on the Table",
    excerpt:
      "The most common revenue mistakes we see — and the simple fixes that turn them around fast.",
    coverImage:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Inferno Agency",
    date: "2026-07-01",
    tags: ["Growth", "Revenue"],
    content: `Every week we audit creator accounts, and the same money-losing patterns show up again and again. Here are the three biggest ones.

## 1. No pricing strategy

Flat pricing leaves cash on the table. Tiered subscriptions, bundles, and well-timed promos consistently outperform a single static price.

## 2. Slow or inconsistent engagement

Fans who feel seen spend more. When DMs and comments go unanswered for hours, retention drops. A managed chatting system keeps that connection warm around the clock.

## 3. Treating every platform the same

What works on one platform flops on another. Repurposing with intent — not copy-pasting — is where cross-platform growth actually comes from.

Fixing even one of these usually moves the needle within weeks.`,
  },
];
