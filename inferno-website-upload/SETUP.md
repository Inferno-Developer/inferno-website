# Inferno Agency Website — Setup & Publishing Guide

This is the reworked Inferno Agency site. It's the same Vite + React + Tailwind
site as before, with four changes:

1. The "Meet Our Leadership Team" section (founder names/photos) was removed.
2. A **Blog** was added (nav link, `/blog` index page, and `/blog/:slug` article pages).
3. Blog articles are managed as **content in Airtable**, not code — so publishing a
   post never requires touching the website or redeploying.
4. The Airtable API key was **removed from the public page**. All Airtable access now
   goes through secure Netlify Functions with the key stored as an environment variable.

---

## 1. Security: rotate the exposed Airtable key (do this first)

The old website had the Airtable API token written directly into the public
JavaScript, which means it was readable by anyone. It must be replaced:

1. In Airtable, go to **Account → Developer hub → Personal access tokens**.
2. **Delete** the old token (the one starting with `patqKWS8…`).
3. **Create a new token** with scopes `data.records:read` and `data.records:write`,
   and access to the Inferno base (`appZ57oHkxygjxP2t`).
4. Copy the new token — you'll paste it into Netlify in step 3. Do NOT put it in the code.

## 2. Create the Blog table in Airtable

In the same base (`appZ57oHkxygjxP2t`), add a table named exactly **`Blog`** with
these fields:

| Field       | Type                     | Notes                                   |
|-------------|--------------------------|-----------------------------------------|
| `Title`     | Single line text         | Article headline                        |
| `Slug`      | Single line text         | URL part, e.g. `growing-on-onlyfans`    |
| `Excerpt`   | Long text                | 1–2 sentence summary for the card       |
| `Content`   | Long text                | The article body, in Markdown           |
| `Cover`     | Attachment **or** URL    | Optional cover image                    |
| `Author`    | Single line text         | Optional (defaults to "Inferno Agency") |
| `Date`      | Date                     | Publish date                            |
| `Tags`      | Multiple select or text  | Optional                                |
| `Published` | Checkbox                 | Only checked rows show on the site      |

**To publish an article:** add a row and tick `Published`. It appears on the site
within about a minute — no code change, no redeploy. (Or just send the article to
your assistant and it gets added for you.)

## 3. Set the environment variable in Netlify

In Netlify: **Site settings → Environment variables → Add a variable**:

- Key: `AIRTABLE_TOKEN`  → Value: the new token from step 1.
- (Optional) Key: `AIRTABLE_BASE_ID` → Value: `appZ57oHkxygjxP2t` (already the default).

Then trigger a redeploy so the functions pick it up.

## 4. Deploy

This project builds with `npm run build` and publishes the `dist` folder. The
included `netlify.toml` already sets the build command, publish folder, functions
folder, and the single-page-app redirect (so `/blog/...` and `/thank-you` load
correctly on a direct visit).

If the site is connected to a Git repo, pushing these files triggers a deploy
automatically. Otherwise, connect this folder to the Netlify site once.

---

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

The blog reads from `/.netlify/functions/blog`. When running locally without
Netlify Functions, it automatically falls back to the sample posts in
`src/blog/samplePosts.ts`, so the Blog page is never empty during development.

## Notes / recommendations for later

- **Domains:** three names came up — `infernomgmt.com` (currently live),
  `inferno-management.com`, and `infernoagency.netlify.app`. Worth settling on one
  primary domain and pointing the others at it.
- **Hero video** is ~17 MB, which is heavy on phones. Compressing it is an easy
  performance win.
- **Social links** live at the top of `src/components/Footer.tsx`
  (`INSTAGRAM_URL` and `X_URL`) — update them there if the handles change.
