# Ilya Mirkin: professional portfolio

Personal AI governance, security, and enterprise technology portfolio at [ilyamir.com](https://ilyamir.com).

## Site structure

- `index.html`: scrolling personal portfolio with a light profile sidebar, uploaded portrait, enterprise experience, selected AI projects, education, and contact links
- `work.html`: selected work and research, with links to detailed case studies and public evidence
- `experience.html`: enterprise experience, perspective, education, and contact information
- `resume.html`: browser-printable, general-purpose AI-focused résumé
- `work/*.html`: project case studies for SafeGuard, the AI Security Lab, and Vera

The current design uses a fixed light profile sidebar on desktop and a collapsible header on mobile, with an optimized portrait in `assets/ilya-portrait.webp`. The content retains the off-white and teal palette. `assets/profile.css` and `assets/profile.js` provide the layout and navigation. The original `assets/mountains.webp` remains available for subtle page artwork.

## Hosting

Static HTML/CSS and a small navigation script. Cloudflare Pages deploys `main` with build command blank and output directory `.`. Preview locally:

```bash
python3 -m http.server 8000
```

Public AI projects are research/demonstration work; case studies identify limitations, and the SafeGuard platform is under development. No sensitive credentials or private customer data should be committed.
