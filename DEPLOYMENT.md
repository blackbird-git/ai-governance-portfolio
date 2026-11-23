# Deployment guide — ilyamir.com

The website is a static site with `index.html` at the repository root. No Node, framework, API keys or build step are needed.

## Fast temporary preview (no permanent project)

1. Go to Cloudflare Drop (linked in the accompanying ChatGPT response) and upload the **Cloudflare preview ZIP** (`Ilya_Mirkin_AI_Portfolio_Cloudflare_Upload.zip`).
2. Cloudflare should return a temporary public preview URL (normally available for one hour).
3. Review the homepage on desktop and a phone. Open each case-study page, check links and contact mailto. Do not claim the preview as the permanent deployment if you plan to connect GitHub for automatic deployment.

## Recommended permanent publication: GitHub -> Cloudflare Pages

1. Sign in as `blackbird-git` and create a new public GitHub repository named `ai-governance-portfolio`. Initialize it with a README (optional).
2. Upload the **contents of this source folder**, preserving `index.html`, `work/`, and `assets/` at repository root. The source ZIP includes metadata files, README and deployment instructions; do not upload the ZIP itself as the website.
3. In Cloudflare, go to **Workers & Pages -> Create application -> Pages -> Connect to Git**, select `blackbird-git/ai-governance-portfolio` and authorize access if prompted.
4. Framework preset: **None**; build command: **leave blank**; output directory: **repository root** (often `/`). Deploy the `main` branch.
5. Review your automatically assigned `*.pages.dev` address. If preview is approved, open the Pages project's **Custom domains** settings and connect `ilyamir.com` (optionally add `www.ilyamir.com` redirect). Follow Cloudflare's DNS prompts.
6. Test HTTPS, both root and `www` hostnames, all case-study links, the sitemap, and mobile navigation.

**Important:** Cloudflare Pages documentation currently says a Direct Upload project cannot later be switched to Git integration (and vice versa). Use Drop for a disposable preview, not a permanent Direct Upload project, if you want the Git-connected workflow above.

## Publication checklist

- [ ] Review wording and personal contact email.
- [ ] Confirm SafeGuard reports and site links remain accessible.
- [ ] Check the latest metrics in the AI Security Lab and Vera READMEs (the site cites recorded results).
- [ ] Review on mobile and desktop.
- [ ] Create and connect the dedicated GitHub repository.
- [ ] Verify preview before attaching `ilyamir.com`.
- [ ] Verify `robots.txt`, `sitemap.xml`, favicon, page titles, and email link after going live.

All project results are described as independent or synthetic work, not production deployments. No resume PDF or private data is bundled.