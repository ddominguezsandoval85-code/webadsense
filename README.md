# Adriatic Beach Duel

Static website comparing the beaches of Montenegro and Albania: a head-to-head comparison, the top 12 beaches, costs, best time to go, a 10-day road-trip itinerary and a practical getting-there guide.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page: comparison, beaches, costs, seasons, FAQ |
| `itinerary.html` | 10-day Kotor to Ksamil road trip |
| `getting-there.html` | Flights, ferries, borders, driving, money |
| `about.html`, `contact.html` | About the author and contact details |
| `privacy-policy.html`, `cookie-policy.html`, `terms.html` | Legal pages required for Google AdSense |
| `photo-credits.html` | Credits for the Wikimedia Commons photos |
| `styles.css`, `main.js` | Shared styles and behaviour for every page |
| `favicon.svg` | Browser tab icon |
| `robots.txt`, `sitemap.xml` | For search engines |
| `ads.txt` | Google AdSense publisher declaration |

## Before going live

1. Replace `www.example.com` with your domain in every `.html` file, `sitemap.xml` and `robots.txt`.
2. Add the Google AdSense `<script>` to the `<head>` of every page (look for the `GOOGLE ADSENSE` comment).
3. Replace `pub-XXXXXXXXXXXXXXXX` in `ads.txt` with your publisher ID.

## Ad slots

Every `<div class="ad-slot">` stays hidden until you paste an AdSense `<ins class="adsbygoogle">` tag inside it.

## Photos

Photos are hotlinked from Wikimedia Commons under their Creative Commons licences. Credits appear under each image and on `photo-credits.html`.
