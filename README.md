# Ilya Mirkin: professional portfolio

Personal AI governance, security, and enterprise technology portfolio at [ilyamir.com](https://ilyamir.com).

## Site structure

- `index.html`: unified scrolling homepage with anchored Overview, Experience, AI work, Education & skills, Résumé, and Contact sections
- `work.html`: selected work and research, with links to detailed case studies and public evidence
- `experience.html`: enterprise experience, perspective, education, and contact information
- `resume.html`: browser-printable, general-purpose AI-focused résumé
- `work/*.html`: project case studies for SafeGuard, the AI Security Lab, and Vera

The homepage retains the off-white, teal, and mountain design while showing enterprise experience and independent AI projects without extra clicks. The résumé page can be printed or saved as PDF from the browser; no standalone PDF file is bundled.

## Hosting

Static HTML/CSS and a small navigation script. Cloudflare Pages deploys `main` with build command blank and output directory `.`. Preview locally:

```bash
python3 -m http.server 8000
```

Public AI projects are research/demonstration work; case studies identify limitations, and the SafeGuard platform is under development. No sensitive credentials or private customer data should be committed.
