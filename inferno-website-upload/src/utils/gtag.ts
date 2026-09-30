// Google Ads conversion tracking helper.
//
// The base Google tag (gtag.js) is loaded in index.html, which also defines
// the global `gtag` function immediately (it queues into dataLayer), so this
// fires reliably even if the external gtag script is still loading.
//
// Because the site is a single-page app, conversions are fired here as events
// on the dedicated thank-you pages rather than relying on page-load URL rules,
// which do not trigger on client-side navigation.

// The conversion "send_to" targets, from the Google Ads event snippets.
export const CONVERSIONS = {
  creatorApplication: "AW-17127599902/A5s8CMjd-eccEJ7eiec_",
  playbookLead: "AW-17127599902/W4TECMXd-eccEJ7eiec_",
} as const;

type GtagFn = (...args: unknown[]) => void;

export function fireConversion(sendTo: string): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: sendTo });
  }
}

// Meta Pixel conversion tracking.
//
// The base pixel (fbq) is loaded in index.html and defines the global `fbq`
// function immediately (it queues), so this fires reliably even while the
// external fbevents.js is still loading. Same SPA reasoning as the Google tag:
// we fire a standard event on the thank-you pages, not a URL-based rule.

type FbqFn = (...args: unknown[]) => void;

export function fireMetaEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
  if (typeof fbq === "function") {
    fbq("track", eventName, params ?? {});
  }
}
