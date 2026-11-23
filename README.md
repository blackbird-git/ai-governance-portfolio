# Ilya Mirkin — AI Governance & Security Portfolio

A static, deployable personal website built to support applications for **AI governance, secure AI adoption, AI security advisory, AI implementation/enablement, and related technical advisory roles**. The site intentionally excludes traditional TAM positioning and does not claim dedicated enterprise GRC program ownership.

## Local preview

Open `index.html` in a browser, or for consistent routing from the site root:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

No package installation, backend, API key, build process, analytics, or database is required. The only optional network request is Google Fonts; system fallbacks are provided. All pages work without JavaScript except the small-screen navigation menu (which uses JavaScript for toggling) and scroll-reveal effects.

## What's included

- `index.html` — homepage focused on AI roles.
- `work/safeguard.html` — AI assessment methodology and illustrative case study.
- `work/ai-security.html` — AI agent authorization/monitoring lab with documented results.
- `work/vera.html` — local AI provenance and evaluation research project.
- `assets/styles.css` — responsive layout and visual design.
- `assets/site.js` — accessible mobile menu, optional reveal animation, dynamic copyright year.
- `assets/favicon.svg` — custom monogram favicon.
- `404.html` — matching not-found page.

## Publishing (after content review)

### GitHub Pages

1. Create a **new public repository** for the site, e.g. `ai-portfolio` or `blackbird-git.github.io`. This site has not been published or pushed by the assistant.
2. Upload all files, preserving paths.
3. In repo **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`; save.
4. GitHub Pages provides a site URL. For a normal `ai-portfolio` repository, the typical path is `https://blackbird-git.github.io/ai-portfolio/`; for a user site repo named `blackbird-git.github.io`, the address is `https://blackbird-git.github.io/`.
5. Optional: connect a personal domain by following GitHub Pages' current custom-domain steps. Do not add a `CNAME` file until a domain has been purchased and configured.

### Cloudflare Pages

1. Create a Pages project and connect the new GitHub repo, or upload the site directory.
2. Use static deployment (no build command; output directory is the repository root or the selected uploaded folder).
3. Optionally attach a personal domain that you own.

## Content checks before publishing

- Confirm the desired public contact email (`ilyamir.mail@gmail.com`) and decide whether to add a verified LinkedIn profile URL.
- Confirm all published SafeGuard sample reports are still available through Kingfisher's site. Their direct URL paths are deliberately *not* guessed.
- Decide whether to create a **separate, evergreen AI-focused resume** for public download. No job-specific resume is bundled here.
- Review whether the copy matches your voice. Case study claims are grounded in recent public GitHub READMEs and established SafeGuard methodology. Do not call illustrative reports client engagements.
- If the public repository README/test counts change, update the number in the site or replace it with a qualitative statement.

## Source / content status

- **SafeGuard:** assessment method and illustrative reports exist; software remains in development; no production governance deployments or paid clients are claimed.
- **AI Security Lab:** recent public README records 406 application tests, 13 CI-policy checks, five observed Wazuh alerts, and unresolved correlation-expiry testing; independently reproducible lab with synthetic data.
- **Vera:** recent public README records 122 regression tests and limitations around reliability, encryption, and multi-user access; prototype rather than production product.
- **Enterprise experience:** 15 years at SS&C, work across approximately 60 customer environments, and documented modernization/observability/DR contributions.

## Design decisions

- No headshot or age, no personal phone number, and no resume PDFs carrying application-specific details.
- No invented production AI work or governance program ownership.
- No dependency-heavy framework; static HTML and CSS are easy to inspect and maintain.
- No employer logos, invented endorsements, testimonial quotes, or fake live software screenshots.
- Contact uses an email link, without storing messages on the website.