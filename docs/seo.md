# SEO + Google Search Console Setup

This project now includes baseline SEO files for the frontend:

- [index.html](/d:/TCG/apps/frontend/index.html)
- [robots.txt](/d:/TCG/apps/frontend/public/robots.txt)
- [sitemap.xml](/d:/TCG/apps/frontend/public/sitemap.xml)
- [site.webmanifest](/d:/TCG/apps/frontend/public/site.webmanifest)

## 1. Update the production URL

These files currently use:

- `https://chronicles-of-the-rift.vercel.app/`

If your real Vercel URL or custom domain is different, update it in:

- [index.html](/d:/TCG/apps/frontend/index.html)
- [robots.txt](/d:/TCG/apps/frontend/public/robots.txt)
- [sitemap.xml](/d:/TCG/apps/frontend/public/sitemap.xml)

## 2. Add Google Search Console verification

In Google Search Console:

1. Add a new property.
2. Use the `URL prefix` option for your exact deployed URL.
3. Choose `HTML tag`.
4. Google will give you a meta tag like:

```html
<meta name="google-site-verification" content="your_token_here" />
```

5. Paste that tag into the `<head>` of:
   - [index.html](/d:/TCG/apps/frontend/index.html)
6. Redeploy the frontend.
7. Click `Verify` in Search Console.

## 3. Submit the sitemap

After deploy, in Search Console:

1. Open `Sitemaps`
2. Submit:

```text
https://chronicles-of-the-rift.vercel.app/sitemap.xml
```

Replace the domain if needed.

## 4. Request indexing

After the site is live:

1. Open `URL Inspection`
2. Inspect your homepage
3. Click `Request Indexing`

## 5. Current SEO coverage

Already added:

- page title
- meta description
- robots directive
- Open Graph tags
- Twitter card tags
- structured data (`VideoGame`)
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

## 6. Recommended next SEO improvements

Good next steps after this:

1. Add separate crawlable pages for:
   - home
   - how to play
   - lore
   - terms
   - privacy
2. Add a real social preview image at:
   - `/public/og-cover.png`
3. Add canonical tags once the final domain is fixed
4. Improve page content with searchable text about:
   - online trading card game
   - multiplayer card game
   - sci-fantasy TCG
   - browser strategy card game

## Official references

- Google Search Central SEO basics:
  - [Get started with Search](https://developers.google.com/search/docs/fundamentals/get-started)
- Google sitemap guidance:
  - [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
