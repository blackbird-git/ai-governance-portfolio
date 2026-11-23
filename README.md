# Ilya Mirkin: professional portfolio

Personal portfolio hosted at [ilyamir.com](https://ilyamir.com).

## Site structure

- `index.html`: personal narrative about enterprise and independent AI work, detailed project summaries with direct links, and a separate résumé section.
- `resume.html`: printable professional résumé, including education and verified enterprise and independent experience.
- `work/*.html`: focused project case studies for SafeGuard, the AI Security Engineering Lab, and Vera.
- `experience.html`, `work.html`: backwards-compatible redirects to homepage sections.

The site has a light fixed sidebar on desktop, compact navigation on mobile, and a larger square portrait in the About section (`assets/ilya-profile-square.webp`). The current site uses `assets/profile.css` and `assets/profile.js`.

## Hosting

Static HTML, CSS and JavaScript. Cloudflare Pages builds from `main`, no build command, output directory `.`. Preview with:

```bash
python3 -m http.server 8000
```

The independent AI projects are not represented as production customer deployments. SafeGuard illustrative reports are not customer engagements, and its supporting software remains in development.
