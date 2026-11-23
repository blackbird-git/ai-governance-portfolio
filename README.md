# Ilya Mirkin — Professional portfolio

Personal AI governance, security, and enterprise technology portfolio at [ilyamir.com](https://ilyamir.com).

## Site structure

- `index.html`: single-screen introduction and three prominent navigation buttons (My work, My experience, Resume)
- `work.html`: selected work and research, with links to detailed case studies and public evidence
- `experience.html`: enterprise experience, perspective, education, and contact information
- `resume.html`: browser-printable, general-purpose AI-focused résumé
- `work/*.html`: project case studies for SafeGuard, the AI Security Lab, and Vera

The home design follows the approved off-white/teal mockup. `assets/mountains.webp` is cropped mountain artwork from that mockup; it contains no embedded labels, buttons, or logo.

## Hosting

Static HTML/CSS and a small navigation script. Cloudflare Pages deploys `main` with build command blank and output directory `.`. Preview locally:

```bash
python3 -m http.server 8000
```

Public AI projects are research/demonstration work; case studies identify limitations, and the SafeGuard platform is under development. No sensitive credentials or private customer data should be committed.
