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
