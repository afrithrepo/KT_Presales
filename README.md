# KaarTech Technical Proposal — Website Template

A reusable, zero-build-step multi-page website template for presales consultants to deliver **Technical Proposals** online instead of static Word documents.

## Brand Colour Palette
- **Red:** `#9D0102`
- **Orange:** `#FF3F00`
- **Grey:** `#C0C0C0`
- **Dark Grey:** `#606062`

## Structure (11 Pages)
- `index.html` — Home / Technical Proposal Cover & Section Directory
1. `executive-summary.html` — Executive summary
2. `customer-requirements.html` — Understanding of the customer & Requirements
3. `solution-architecture.html` — Solution architecture
4. `scope-of-work.html` — Scope of work
5. `project-methodology.html` — Project Methodology
6. `project-management.html` — Project Management
7. `scope-exclusions.html` — Scope considerations and exclusions
8. `appendix-company-profile.html` — Appendix I - Company profile
9. `appendix-certifications.html` — Appendix II - Certifications
10. `appendix-case-studies.html` — Appendix III - Case studies

## How to Customize for Any New Proposal
1. Duplicate this folder for your new client engagement.
2. Open `data/proposal-config.js` in any text editor or IDE.
3. Update `meta` (client name, project title, proposal ID, date, author) and each section's content.
4. Open `index.html` directly in any browser—or host the folder on Netlify, Vercel, GitHub Pages, SharePoint, or any static web server.
5. Use the **Print / Save as PDF** button in the sidebar if the client also requests a PDF copy.
