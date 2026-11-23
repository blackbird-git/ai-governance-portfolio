# Ilya Mirkin — Professional portfolio

Personal site for [ilyamir.com](https://ilyamir.com), focused on AI governance, AI security assessment, responsible adoption, and technical advisory opportunities. It is a résumé-first editorial site, not a consulting-services landing page.

## Pages

- `index.html` — professional introduction, selected work, enterprise experience, education and contact
- `resume.html` — readable and browser-printable evergreen AI-focused résumé
- `work/safeguard.html` — NIST-informed AI assessment methodology (usable independently); supporting software remains under development
- `work/ai-security.html` — application-enforced AI security lab with public source and synthetic test evidence
- `work/vera.html` — local AI memory and provenance research, limitations and test evidence

## Hosting

Static HTML, CSS and a small menu script. No build dependencies or backend. Cloudflare Pages connects directly to `main`; build command blank, output directory `.`. Local preview:

```bash
python3 -m http.server 8000
```

The site links out to public project repositories and Kingfisher; no invented client testimonials, engagement metrics, certification, or production AI claims are made. Illustrative assessments and independently developed prototypes are labeled as such.

## Editorial style

Personal biography and enterprise experience lead; projects are presented as writing and evidence rather than product marketing. Colors use navy, teal and off-white. Website copy is first-person, factual, and concise. Keep it readable without JavaScript and keyboard accessible. The résumé page can be printed to PDF in a browser; there is no bundled downloadable PDF.

## Maintenance

Verify any project statistics against the public project's current README before updating. Avoid linking a job-specific résumé publicly; the on-site résumé is general. Keep personal email and public links up to date. Review on mobile and desktop after changes.

Portfolio deployment verified on Cloudflare Pages.
