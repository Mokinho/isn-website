# ISN.gov.my revamp – concept build

Static HTML/CSS/JS build of the proposed revamp of [isn.gov.my](https://isn.gov.my) (Institut Sukan Negara Malaysia), prepared by **Sterrific Sdn Bhd** as a **pitch concept**.

> This is not the official ISN website. Every page carries a "Concept for pitch" banner, `<meta name="robots" content="noindex, nofollow">` and `robots.txt` blocks all crawlers. Keep the repository **private** until ISN approves the project.

## Pages

| File | Template |
| --- | --- |
| `index.html` | Homepage |
| `about.html`, `leadership.html`, `division-sports-medicine.html` | About ISN, Leadership, Division |
| `services.html`, `services-physiotherapy.html` | Services hub, Service detail |
| `athletes-coaches.html` | Athletes & Coaches |
| `research.html` | Research & Publications |
| `locations.html`, `locations-unisza.html` | Locations, Satellite centre |
| `news.html`, `news-sea-games-2025.html` | News listing, Article |
| `notices.html` | Tenders, careers & notices |
| `contact.html` | Contact |
| `search.html` | Search results |

## Structure

```
assets/css/site.css    one stylesheet (fonts, motion, mega menu, responsive)
assets/js/site.js      FAQ accordions, tabs, mobile menu (no dependencies)
assets/fonts/          self-hosted Barlow Condensed, Raleway, Archivo Narrow (SIL OFL, licences included)
assets/img/            photos, ISN + platform logos, partner logos, athlete photos
robots.txt, sitemap.xml, .nojekyll
```

## Preview locally

```
python3 -m http.server 8000
# open http://localhost:8000
```

(Open via a local server, not by double-clicking: browsers block self-hosted fonts on `file://`.)

## SEO built in

- Unique title, meta description, canonical, hreflang (en-MY / ms-MY / x-default), Open Graph and X card on every page
- JSON-LD: GovernmentOrganization, WebSite + SearchAction, BreadcrumbList, MedicalClinic, NewsArticle, FAQPage, ContactPage
- One H1 per page, semantic headings, descriptive alt text, skip link, keyboard-friendly menus, reduced-motion support
- Self-hosted fonts and WebP images for Core Web Vitals

## Before go-live (to agree with ISN)

1. **Content:** replace every `[square bracket]` placeholder (fees, hours, staff names and photos, vision/mission, course dates, article body, stats).
2. **Brand font:** headings use Barlow Condensed as a stand-in. The live site uses *Futura PT Condensed Extra Bold Oblique*, which needs ISN's own web-font licence.
3. **Image rights:** athlete photos were supplied for the pitch; confirm usage rights or replace with ISN-owned images.
4. **Bilingual + URLs:** production should follow the blueprint (BM at root, English under `/en/`, translated slugs, 301 redirect map).
5. **Platform:** this static build can be ported to a WordPress block theme on ISN's MyGov hosting.
6. **Indexing:** remove `noindex` and the `robots.txt` block only on the official domain.
