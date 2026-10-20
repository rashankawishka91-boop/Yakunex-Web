# Yakunex Technologies — Website

Premium responsive multi-page corporate website using HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `projects.html` — Portfolio with working filters
- `insights.html` — Insights/blog
- `contact.html` — Enquiry form with validation
- `careers.html` — Careers
- `faq.html` — FAQ
- `privacy.html` — Privacy policy starter
- `terms.html` — Terms starter
- `404.html` — Custom not-found page

## Run locally
The site is static and does not require a build step. Open `index.html` directly, or run a local server:

```bash
npx serve .
```

Alternatively, use the VS Code Live Server extension.

## Contact form
The contact form validates input in the browser and opens the visitor's email application with a prepared enquiry addressed to the company's email address. **Before launch**, replace `hello@yakunex.com` in `assets/site.js` with the company's confirmed email. For a production website, connect the form to a trusted form backend or your own API endpoint so submissions work even when the visitor has no configured email app.

## Brand assets
`assets/yakunex-logo.png` is a transparent-background extraction from the supplied photographed sign. Because the source is a photograph, inspect it before publishing. Replace it with the original high-resolution transparent logo file if available.

## SEO / launch checklist
- Replace the example canonical domain `https://www.yakunex.com/` with the registered production domain.
- Confirm company email, social URLs, service claims, portfolio projects and any legal wording.
- Add a real sitemap and robots.txt with the final domain.
- Configure HTTPS and production form delivery.
- Test keyboard navigation, mobile menu, and form delivery before launch.

No fake testimonials, client logos, certifications, or performance statistics are included.
