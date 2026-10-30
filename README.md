# Cosmere Archives website

Static website for https://cosmerearchives-creator.github.io/.

GitHub Pages publishing source: `main`, `/ (root)`. No build or dependencies required. `.nojekyll` keeps the site static.

## Pages
- `/`: umbrella hub and app listing
- `/apps/silverlight/`: Google OAuth app homepage for Silverlight
- `/privacy/`: website and Silverlight privacy policy
- `/terms/`: terms

## Adding apps
Add `apps/<slug>/index.html`, replace a clearly marked placeholder on the homepage with a real app entry, and link the app's applicable privacy policy. Keep release links and claims consistent with the actual app implementation.

## Privacy review
Reviewed public `cosmerearchives-creator/Mind-Map` main at `f73ae63be71ce7afe9c7de39fbfcfa3f93e8b05c` on October 24, 2026, including native Android/Windows DriveSync, drive-sync.js, auto-sync.js, and index.html. The older private Silverlight repository does not represent the current sync implementation. No private app source or credentials are included in this site.

Policy describes `drive.appdata`, Drive permissionId account matching, workspace snapshots/parts, local storage and recovery, DPAPI-protected Windows refresh credentials, manual/automatic sync, append-only cloud retention, optional OpenAI requests, external media, GitHub hosting/update requests, and user-controlled deletion. Re-check when behavior changes. Contact is public GitHub Issues; a dedicated support email can be added once supplied by the owner.

## OAuth URLs
Homepage: https://cosmerearchives-creator.github.io/apps/silverlight/
Privacy: https://cosmerearchives-creator.github.io/privacy/
Terms: https://cosmerearchives-creator.github.io/terms/

Hosting alone does not guarantee Google branding approval. Complete any Google domain ownership or application verification requirements separately. No custom domain has been purchased or configured.

## Silverlight community philosophy (October 30, 2026)

The hub About, Silverlight About/support/licensing, and site terms summarize the [proposed custom community license](https://github.com/cosmerearchives-creator/Mind-Map/blob/main/LICENSE). The linked license controls. This is restricted source-available software, not OSI-approved open source. Preserve the five-person initial team limit, continuing original-creator control, nontransferable grandfathering, individual output monetization without an income ceiling, and separate commercial licensing. Donations and shout-outs are optional; no donation destination or private contact address has been supplied. Public GitHub Issues provide an initial inquiry route.

Describe human-directed, largely AI-generated main-branch code candidly. Keep the offline-first core and optional sync/AI/accounts philosophy distinct from network requests: the license requires no telemetry or online verification, while optional services and update checks still contact providers. This update does not change app behavior or re-audit the October 24 privacy implementation. Contributor permissions, dependencies, legal enforceability, and brands still need review; avoid guarantees.
