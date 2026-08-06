# Three-Way Website Audit

Audit date: 2026-08-06  
Live site checked: https://miamijunkremovalpros.com/ and https://www.miamijunkremovalpros.com/  
Local workspace: `C:\Users\wetie\Downloads\SAAS\miami-junk-removal-pros`

## 1. Executive Summary

Local `main`, GitHub default branch `main`, and the live production website are broadly aligned. The strongest confirmed match is the latest local/GitHub commit `ffc66951fa59b1966e1a8980c13d9404e11a181f`, whose homepage feature, the real-time availability indicator, is visible in production.

No uncommitted local changes, staged changes, untracked files, or ignored required files were found before this audit report was created.

The highest-priority issues are not file drift. They are production/site-quality issues:

- Production canonical host mismatch: live traffic resolves to `www.miamijunkremovalpros.com`, while canonicals, Open Graph URLs, JSON-LD, and sitemap URLs point to non-`www`.
- Pricing inconsistencies remain inside the same deployed codebase: some metadata/schema/hero copy still says single items start at `$99`, while visible pricing tables and minimum-charge copy say `$125`.
- `/privacy` and `/terms` are missing in local, GitHub, and production.
- Two stale open draft PRs remain in GitHub even though their work appears already incorporated into `main`.
- GitHub homepage metadata points to `https://miami-junk-removal-pros.vercel.app`, not the custom production domain.

## 2. Repository Identification

- Local repository: `hakimbello/miami-junk-removal-pros`
- Remote URL: `https://github.com/hakimbello/miami-junk-removal-pros.git`
- GitHub repository: `hakimbello/miami-junk-removal-pros`
- Visibility: public
- Archived: false
- GitHub default branch: `main`
- GitHub language: HTML
- GitHub pushed at: `2026-07-03T13:46:39Z`
- GitHub homepage field: `https://miami-junk-removal-pros.vercel.app`
- Local tracked files: 49
- Large committed files over 500 KB: none
- Largest notable asset: `logo-brandV3.png`, 302,996 bytes

## 3. Local Git Status

- Current local branch: `main`
- Local HEAD: `ffc66951fa59b1966e1a8980c13d9404e11a181f`
- Latest local commit date: `2026-07-03 09:46:35 -0400`
- Latest local commit subject: `feat: add real-time availability indicator to homepage hero`
- Locally-known `origin/main`: `ffc66951fa59b1966e1a8980c13d9404e11a181f`
- Live remote `refs/heads/main` from read-only `git ls-remote`: `ffc66951fa59b1966e1a8980c13d9404e11a181f`
- Ahead/behind: `0 / 0`
- Modified files before report creation: 0
- Staged files: 0
- Untracked files before report creation: 0
- Ignored files reported by `git ls-files --ignored --others --exclude-standard`: 0
- Multiple remotes: no, only `origin`
- Tags: none

## 4. GitHub Status

- Default branch: `main`
- Latest confirmed default-branch commit: `ffc66951fa59b1966e1a8980c13d9404e11a181f`
- Open pull requests: 2
- Open issues: 2, both are the open PR issue records
- GitHub Actions workflows: 0
- Recent workflow runs: 0
- Releases: none returned
- Dependabot alerts: unavailable through unauthenticated/public REST endpoint; returned 401
- Branches visible from `git remote show origin`: `main`, plus remote branches `cursor/about-page-2893` and `cursor/add-vercel-json-db5c`
- Stale PR risk: PR #1 "Add About Us page with site-wide nav link" and PR #2 "Add vercel.json for clean URL routing" remain open drafts, but `about.html` and `vercel.json` are already present in `main`.

## 5. Production Status

- Hosting provider: Vercel, confirmed by `Server: Vercel` and `x-vercel-id` headers.
- Apex `https://miamijunkremovalpros.com/`: returns 308 permanent redirect.
- Canonical live host after redirect: `https://www.miamijunkremovalpros.com/`
- Sampled clean routes returning 200: `/`, `/about`, `/pricing`, `/get-quote`, `/book`, all service pages, all city pages, all Spanish pages, `/robots.txt`, `/sitemap.xml`, `/css/styles.css`, `/js/main.js`, and logo assets.
- Sampled missing routes: `/privacy` returns 404; `/terms` returns 404.
- Sampled 404 route: `/nonexistent-audit-check` returns 404.
- Console errors/warnings on live homepage browser pass: none captured.
- Mobile menu: confirmed working at 390px width; `#main-nav` changed from hidden to open and `aria-expanded` changed from false to true.
- Production commit hash: not exposed by page HTML or headers. Deployment freshness is inferred from visible homepage content matching the latest commit feature.

## 6. Build System Identified

This is a static HTML/CSS/JS site.

- Present: `vercel.json`, `netlify.toml`, `.gitignore`, static `.html`, `css/styles.css`, `js/main.js`, images, `robots.txt`, `sitemap.xml`
- Absent: `package.json`, package lockfiles, Gulp, Grunt, Webpack, Vite, Next.js, React, Astro, Remix, Nuxt, TypeScript, Tailwind config, ESLint config, Prettier config, Docker, Firebase config, GitHub Actions workflows
- Package manager: none
- Build command: none
- Dev command: none
- Start command: none
- Lint/type-check/test commands: none
- Vercel config: `cleanUrls: true`, `trailingSlash: false`, and explicit `.html` to clean-URL redirects
- Netlify config: `publish = "."`, empty build command

## 7. Local Versus GitHub Differences

No differences found between local `HEAD` and GitHub default branch `main`.

- `git ls-tree -r --name-only HEAD` matches `git ls-tree -r --name-only origin/main`.
- `git rev-list --left-right --count main...origin/main` returned `0 0`.
- No local-only tracked changes.
- No untracked local files before this report.
- No GitHub-only files on default branch.

## 8. GitHub Versus Production Differences

No confirmed file/content drift on sampled production routes. Production appears to include the latest GitHub default-branch features:

- Homepage availability indicator is visible online.
- Pricing table shows `$125 - $150` for single items online, matching local `index.html`.
- Spanish pages added in recent commits return 200 online.
- Clean URLs configured by `vercel.json` return 200 online.

Remaining production unknowns:

- Exact Vercel deployment ID and commit hash were not exposed.
- Vercel project/team configuration was not available locally because `.vercel/project.json` is absent.
- Vercel dashboard deployment settings, Node version, environment variables, and latest deployment date were not safely verifiable from local files alone.

## 9. Local Versus Production Differences

No confirmed route/content differences for sampled pages. The notable differences are configuration/SEO interpretation:

- Live production resolves to `www`, while local page metadata uses non-`www`.
- Live `robots.txt` is 78 bytes; local `robots.txt` is 82 bytes. Content appears semantically the same except line endings/transport rendering.
- Live `sitemap.xml` is 7,340 bytes; local file is 7,610 bytes. No sitemap URL omissions were found in the sampled route check, but exact byte equality was not established.

## 10. Confirmed Deployment Status

- Production is hosted on Vercel.
- Clean URLs are active in production.
- `.html` routes are redirected to clean URLs by `vercel.json`.
- All expected tracked pages were reachable through clean URLs in production.
- The current visible production homepage includes the latest committed availability feature.

## 11. Inferred Deployment Status

Production likely reflects GitHub `main` at or after `ffc66951fa59b1966e1a8980c13d9404e11a181f`, because the commit subject `feat: add real-time availability indicator to homepage hero` matches the visible live homepage text `Open now - Same-day slots still available`.

This is an inference, not a confirmed deployment hash, because the live site does not expose a commit identifier.

## 12. Critical Bugs

No critical customer-action failures were confirmed.

## 13. High-Priority Problems

### Finding H1: Canonical Host Mismatch

- Severity: High
- Source affected: Local, GitHub, Production
- Page or route: all indexable pages
- Local file path: `index.html`, `about.html`, `pricing.html`, `get-quote.html`, `book.html`, `pages/*.html`, `sitemap.xml`, `robots.txt`
- GitHub file path: same paths on `hakimbello/miami-junk-removal-pros`
- Relevant line number: `index.html:10`, `pricing.html:9`, `sitemap.xml:5`, repeated across page heads
- Description: Production redirects to `https://www.miamijunkremovalpros.com/`, but canonicals, OG URLs, JSON-LD URLs, robots sitemap reference, and sitemap URLs use `https://miamijunkremovalpros.com`.
- Evidence: live apex returned 308 to `www`; live homepage canonical is `https://miamijunkremovalpros.com/`; source line `index.html:10` uses non-`www`.
- Confirmed fact or inference: confirmed
- Customer impact: low direct customer impact
- Business impact: SEO consolidation risk; search engines may see mixed preferred hosts.
- Recommended repair: choose one canonical host, then align Vercel domain redirect, canonical tags, OG URLs, JSON-LD URLs, sitemap URLs, and robots sitemap URL.
- Estimated effort: Small
- Risk of breaking another feature: Low

### Finding H2: Pricing Copy Still Conflicts Between `$99` and `$125`

- Severity: High
- Source affected: Local, GitHub, Production
- Page or route: `/`, `/pricing`, city pages
- Local file path: `index.html`, `pricing.html`, selected city pages
- GitHub file path: same paths
- Relevant line number: `index.html:71`, `index.html:192`, `pricing.html:7`, `pricing.html:106`, `pricing.html:138`, `pricing.html:386`
- Description: Visible homepage pricing says single item `$125 - $150`, but homepage FAQ schema still says single items start at `$99`. Pricing page metadata/hero/schema says `$99` and estate cleanouts from `$299`, while tables and minimum-charge FAQ say `$125` minimum.
- Evidence: `index.html:71` says "Single items start at $99"; `index.html:192` visible table says `$125 - $150`; `pricing.html:386` says minimum charge is `$125`.
- Confirmed fact or inference: confirmed
- Customer impact: customers may expect a lower starting price than the business intends to charge.
- Business impact: quote friction, trust loss, possible review complaints.
- Recommended repair: normalize all minimum/single-item and estate-cleanout pricing in title/meta/OG/schema/body tables/FAQ/widget data.
- Estimated effort: Medium
- Risk of breaking another feature: Low

### Finding H3: Privacy and Terms Pages Missing

- Severity: High
- Source affected: Local, GitHub, Production
- Page or route: `/privacy`, `/terms`
- Local file path: no matching local files found
- GitHub file path: no matching default-branch files found
- Relevant line number: not applicable
- Description: The audit request expected Privacy Policy and Terms pages, but neither exists locally/GitHub, and production returns 404 for both.
- Evidence: text scan found no privacy/terms page links; passive HEAD checks returned 404 for `/privacy` and `/terms`.
- Confirmed fact or inference: confirmed
- Customer impact: customers submitting quote forms have no visible privacy policy for data handling.
- Business impact: trust, compliance, and ad-platform risk.
- Recommended repair: add clear privacy and terms pages, link them in footer, and add sitemap entries.
- Estimated effort: Medium
- Risk of breaking another feature: Low

## 14. Medium-Priority Problems

### Finding M1: Open Draft PRs Are Stale

- Severity: Medium
- Source affected: GitHub
- Page or route: repository workflow
- Local file path: `about.html`, `vercel.json`
- GitHub file path: PR #1 and PR #2
- Relevant line number: not applicable
- Description: Two open draft PRs remain for changes already present on `main`.
- Evidence: PR #1 title: "Add About Us page with site-wide nav link"; `about.html` is tracked on `main`. PR #2 title: "Add vercel.json for clean URL routing"; `vercel.json` is tracked on `main`.
- Confirmed fact or inference: confirmed
- Customer impact: none direct
- Business impact: repository confusion; future agents may chase already-completed work.
- Recommended repair: review PR histories and close or supersede stale drafts after confirming no unique changes remain.
- Estimated effort: Small
- Risk of breaking another feature: Low

### Finding M2: GitHub Homepage Points to Old Vercel Preview Domain

- Severity: Medium
- Source affected: GitHub
- Page or route: repository metadata
- Local file path: not stored locally
- GitHub file path: repository settings
- Relevant line number: not applicable
- Description: GitHub repository homepage is `https://miami-junk-removal-pros.vercel.app`, while production audit target is `https://miamijunkremovalpros.com`.
- Evidence: GitHub REST repo metadata returned homepage `https://miami-junk-removal-pros.vercel.app`.
- Confirmed fact or inference: confirmed
- Customer impact: users browsing GitHub may land on the wrong brand/domain.
- Business impact: branding and SEO consistency risk.
- Recommended repair: update GitHub repository homepage to the chosen production domain.
- Estimated effort: Small
- Risk of breaking another feature: Low

### Finding M3: No CI, Link Check, HTML Validation, or Deployment Workflow

- Severity: Medium
- Source affected: GitHub
- Page or route: repository
- Local file path: `.github/workflows` absent
- GitHub file path: `.github/workflows` absent
- Relevant line number: not applicable
- Description: The repo has no GitHub Actions workflows and no package scripts, so regressions in links, metadata, or pricing copy are not automatically caught.
- Evidence: GitHub Actions workflows total count 0; local `git ls-files .github/workflows` returned none.
- Confirmed fact or inference: confirmed
- Customer impact: future broken customer actions could ship unnoticed.
- Business impact: higher maintenance risk.
- Recommended repair: add read-only CI checks later: link checker, HTML validator, sitemap route check, pricing consistency grep.
- Estimated effort: Medium
- Risk of breaking another feature: Low

## 15. Low-Priority Problems

### Finding L1: Duplicate Hosting Configs

- Severity: Low
- Source affected: Local, GitHub
- Page or route: deployment config
- Local file path: `vercel.json`, `netlify.toml`
- GitHub file path: same
- Relevant line number: `netlify.toml:1`, `vercel.json:1`
- Description: Both Vercel and Netlify config files exist, but production is served by Vercel.
- Evidence: live headers show Vercel; local `netlify.toml` still exists with `publish = "."`.
- Confirmed fact or inference: confirmed
- Customer impact: none direct
- Business impact: future deployment confusion.
- Recommended repair: document primary host and keep/remove secondary config intentionally.
- Estimated effort: Small
- Risk of breaking another feature: Low

### Finding L2: Sitemap `lastmod` Dates Lag Latest Commit Dates

- Severity: Low
- Source affected: Local, GitHub, Production
- Page or route: `/sitemap.xml`
- Local file path: `sitemap.xml`
- GitHub file path: `sitemap.xml`
- Relevant line number: multiple `<lastmod>` entries
- Description: Recent commits on 2026-07-03 changed pages and features, but sitemap `lastmod` entries mostly show 2026-06-27 to 2026-06-29.
- Evidence: latest commit date is 2026-07-03; sitemap entries include older dates.
- Confirmed fact or inference: confirmed
- Customer impact: none direct
- Business impact: weaker crawl freshness signals.
- Recommended repair: update sitemap `lastmod` when content changes are deployed.
- Estimated effort: Small
- Risk of breaking another feature: Low

## 16. Broken Pages and Routes

Confirmed working production routes:

- `/`, `/about`, `/pricing`, `/get-quote`, `/book`
- `/pages/same-day-junk-removal-miami`
- `/pages/furniture-removal-miami`
- `/pages/appliance-removal-miami`
- `/pages/mattress-removal-miami`
- `/pages/estate-cleanout-miami`
- `/pages/hoarding-cleanout-miami`
- `/pages/construction-debris-removal-miami`
- `/pages/commercial-junk-removal-miami`
- `/pages/move-out-cleaning-miami`
- `/pages/airbnb-cleaning-miami`
- `/pages/airbnb-turnover-service-miami`
- `/pages/vacation-rental-cleaning-miami`
- `/pages/short-term-rental-cleaning-miami`
- `/pages/apartment-turnover-cleaning-miami`
- `/pages/junk-removal-miami-beach`
- `/pages/junk-removal-hialeah`
- `/pages/junk-removal-coral-gables`
- `/pages/junk-removal-north-miami`
- `/pages/junk-removal-boca-raton`
- `/pages/airbnb-cleaning-miami-beach`
- `/pages/kendall`, `/pages/doral`, `/pages/miramar`, `/pages/pembroke-pines`, `/pages/hollywood`, `/pages/fort-lauderdale`, `/pages/aventura`, `/pages/hallandale-beach`, `/pages/davie`, `/pages/homestead`
- `/pages/eliminacion-de-basura-miami`, `/pages/limpieza-airbnb-miami`, `/pages/limpieza-de-herencia-miami`

Confirmed missing:

- `/privacy`: 404
- `/terms`: 404

## 17. Content and Pricing Inconsistencies

- Business name: consistent as Miami Junk Removal Pros.
- Phone number: consistent as `(305) 928-5773` / `tel:+13059285773`.
- Email address: no public email found.
- Hours: consistent as 7AM-7PM daily.
- Service area: consistent as Miami-Dade and Broward, with Boca Raton/Palm Beach County page also present.
- Prices: inconsistent. `$99` remains in metadata/schema/body copy, while the newer minimum is `$125` for most single items.
- Full-truck pricing: consistent around `$400 - $600`.
- Estate pricing: inconsistent between `$299`, `$500`, `$1,500+`, and `$2,500+` depending on context.
- High-rise/access fees: disclosed on pricing and relevant city/service pages.
- Same-day claims: consistent across homepage and service pages.
- Quote promise: consistent, usually "under 10 minutes."
- Payment methods: not clearly found.
- Insurance claims: present on commercial and high-rise pages, but no linked proof or policy page.
- Reviews/testimonials: homepage has testimonial copy and a Google search link, not direct review-platform structured proof.
- Social media links: none found.

## 18. SEO Findings

- Every HTML page has exactly one `<title>`, one meta description, one canonical, one OG image, and one H1.
- Homepage, about, and get-quote include LocalBusiness schema; most service/city pages include FAQPage schema but not LocalBusiness or Service schema.
- Breadcrumb schema was not found.
- The sitemap includes all tracked clean page routes.
- Robots allows all crawlers and declares sitemap.
- Canonical host mismatch is the top SEO issue.
- Missing privacy/terms pages weaken trust signals.
- City pages are numerous and template-similar; review for doorway-page risk and make sure each city page has genuinely local, accurate content.
- Images have alt text where logo images are used.

## 19. Accessibility Findings

- Positive: pages have one H1, menu button has `aria-expanded` and `aria-controls`, images have alt text, quote form fields have labels.
- Issue: ZIP checker input has no visible `<label>`; it relies on placeholder text.
- Issue: repeated emoji inside CTA/button text may be noisy for screen readers.
- Issue: nav dropdown buttons have no explicit `aria-controls` tying them to their dropdown menus.
- Browser check: mobile menu toggles correctly at 390px width.

## 20. Performance Findings

- Static site with no framework bundle, favorable baseline.
- Fonts are loaded from Google Fonts on every page.
- Logo image `logo-brandV5.png` is reused; assets return 200.
- No build output bloat found.
- No package/dependency footprint exists.
- Largest tracked asset over 100 KB is `logo-brandV3.png` at 302,996 bytes; it is not clearly used by current HTML.

## 21. Security Findings

- No exposed API keys, tokens, or server secrets found in local source scans.
- Public Formspree endpoint `https://formspree.io/f/xwvdblkd` is present in `index.html` and `get-quote.html`; this is expected for a static form integration, but spam protection should be configured in Formspree.
- Forms were not submitted during this audit.
- No package dependencies means no local dependency CVE review applies.
- Dependabot alert status could not be verified; GitHub API returned 401 for public unauthenticated access.
- No privacy policy is present for form data handling.

## 22. Page-by-Page Findings

- `/`: Matches local/GitHub content and shows latest availability indicator. Canonical host mismatch and pricing schema `$99` issue apply.
- `/about`: Present locally/GitHub/production. Business-founder copy is consistent.
- `/pricing`: Present locally/GitHub/production. Main page for pricing inconsistency; metadata/hero/schema still use `$99` while minimum FAQ says `$125`.
- `/get-quote`: Present. Form posts to Formspree; labels and required fields exist. Privacy/terms links absent.
- `/book`: Present. Calendly embed URL points to `https://calendly.com/brownenterprise/junk-removal-booking`.
- `/pages/* service pages`: Present and reachable. FAQPage schema is consistent, but LocalBusiness/Service/Breadcrumb schema coverage is limited.
- `/pages/* city pages`: Present and reachable. Footer links include the newer city pages; top nav location dropdown is smaller and omits several newer city pages.
- `/pages/* Spanish pages`: Present and reachable. Spanish pages still use English footer branding, which may be acceptable but is not fully localized.
- `/privacy` and `/terms`: absent and return 404.

## 23. Files Requiring Review

- `index.html`: pricing schema mismatch, homepage form, availability widget, ZIP checker, canonical host.
- `pricing.html`: pricing metadata/schema/body mismatches.
- `sitemap.xml`: host choice and stale `lastmod`.
- `robots.txt`: host choice for sitemap URL.
- `vercel.json`: keep as production config; verify `.html` redirect list whenever new pages are added.
- `netlify.toml`: decide whether it is still needed.
- `pages/*.html`: host canonicals, repeated footer/nav chrome, city-page uniqueness, missing Service/LocalBusiness/Breadcrumb schema.
- `get-quote.html`: form privacy disclosure and spam posture.
- `book.html`: third-party Calendly dependency and fallback copy.

## 24. Recommended Repair Order

1. Add privacy and terms pages, link them from footer and forms, and include them in sitemap if indexable.
2. Normalize all pricing copy and schema to the current business policy.
3. Choose canonical host, then align Vercel domain redirects, canonicals, OG URLs, JSON-LD, robots, and sitemap.
4. Close or supersede stale open draft PRs after checking whether they contain unique work.
5. Update GitHub repository homepage to the custom production domain.
6. Document deployment provider, branch, build command, output directory, and no-build static-hosting model.
7. Add automated read-only checks later: route checker, link checker, pricing consistency check, HTML validation.
8. Add missing schema types where appropriate: Service, LocalBusiness on key service/location pages, BreadcrumbList.
9. Improve accessibility: label ZIP input, add nav dropdown `aria-controls`, review emoji CTAs.
10. Review city and Spanish pages for uniqueness/localization quality.

## 25. Fix Plan for After August 8

1. Audit and decide current price policy with the business owner.
2. Update all pricing references in one coordinated pass.
3. Create privacy and terms pages tailored to Formspree/Calendly/photo-upload handling.
4. Standardize canonical host to either `www` or apex and apply consistently.
5. Add a lightweight CI workflow for static HTML checks.
6. Clean stale GitHub PRs/branches and update repository metadata.
7. Document Vercel deployment settings in `README.md` or `DEPLOYMENT.md`.
8. Add structured data improvements and accessibility refinements.

## Three-Way Classification

### Matches

- Local and GitHub default branch file lists match exactly.
- Production serves the tracked pages and assets sampled in this audit.
- Business name, phone number, hours, same-day positioning, and core service areas are consistent.
- Latest homepage availability feature is visible in production.

### Local Only

- None found before this report was created.

### GitHub Only

- No default-branch GitHub-only files found.
- GitHub-only stale draft PR branches exist but are not part of default branch.

### Production Only

- None confirmed.

### Local and GitHub, Not Production

- None confirmed.

### Local and Production, Not GitHub

- None confirmed.

### GitHub and Production, Not Local

- None confirmed.

### Unknown

- Exact production deployment commit hash.
- Vercel project ID/team ID and dashboard settings.
- Branch protection settings.
- Security alerts/Dependabot status.
- Production environment-variable names/values, if any.
- Full visual regression state across every route.

## Final Summary Table

| Item | Local status | GitHub status | Production status | Match status | Severity | Recommended next action |
|---|---|---|---|---|---|---|
| Default branch code | `ffc6695` | `ffc6695` | Appears deployed | Match inferred | Low | No repair needed |
| Working tree | Clean before report | N/A | N/A | Match | Low | No repair needed |
| Routes/pages | 38 HTML pages tracked | Same | Sampled routes 200 | Match | Low | Keep route checks |
| Privacy/terms | Missing | Missing | 404 | Match, but bad | High | Add pages |
| Canonical host | Non-`www` | Non-`www` | Live redirects to `www` | Mismatch | High | Standardize host |
| Pricing | Mixed `$99`/`$125` | Mixed `$99`/`$125` | Mixed | Match, but bad | High | Normalize pricing |
| Deployment host | Vercel config present | Vercel config present | Vercel confirmed | Match | Low | Document settings |
| Netlify config | Present | Present | Not production | Extra config | Low | Decide keep/remove |
| GitHub PRs | N/A | 2 stale drafts | N/A | GitHub-only process issue | Medium | Review and close/supersede |
| GitHub Actions | None | None | N/A | Missing guardrail | Medium | Add static checks |
| Forms | Formspree endpoint | Same | Present | Match | Medium | Add privacy/spam review |
| Booking | Calendly brownenterprise URL | Same | Present | Match | Low | Verify account ownership |
| Images/assets | Present | Same | 200 | Match | Low | Remove unused old logos if desired |
| SEO metadata | Present | Same | Present | Match with host flaw | High | Fix host/schema |
| Accessibility | Basic labels/menu OK | Same | Menu works | Partial | Medium | Improve ZIP/nav ARIA |

## Final Repair Queue

1. Broken customer actions: add privacy/terms pages; verify ZIP checker manually after browser timeout.
2. Revenue loss: normalize `$99` versus `$125` pricing and estate-cleanout ranges.
3. Security: add privacy disclosure; review Formspree spam protections and data retention.
4. Incorrect pricing or business information: align all metadata, schema, hero copy, tables, FAQs, and widgets.
5. Deployment mismatch: standardize `www` versus apex canonical host and update GitHub homepage.
6. SEO: add missing Service/Breadcrumb schema and refresh sitemap `lastmod`.
7. Accessibility: label ZIP input, add dropdown `aria-controls`, review emoji-heavy CTAs.
8. Performance: remove unused old logo assets if confirmed unused.
9. Visual polish: review city-page/localization quality and footer/top-nav consistency.
