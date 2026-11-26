/**
 * ============================================================================
 * KAARTECH PROPOSAL TEMPLATE — SHARED NAVIGATION & LAYOUT SHELL
 * ============================================================================
 */

window.PROPOSAL_PAGES = [
  { id: "home", num: "00", title: "Home", shortTitle: "Technical Proposal", href: "index.html", group: "Overview", desc: "Proposal cover, client details, and section directory." },
  { id: "executive-summary", num: "01", title: "Executive summary", href: "executive-summary.html", group: "Proposal Sections", desc: "Strategic alignment, key outcomes, and business value." },
  { id: "customer-requirements", num: "02", title: "Understanding of the customer & Requirements", href: "customer-requirements.html", group: "Proposal Sections", desc: "Business context, pain points, functional & NFRs." },
  { id: "solution-architecture", num: "03", title: "Solution architecture", href: "solution-architecture.html", group: "Proposal Sections", desc: "Layered architecture, components, and integration patterns." },
  { id: "scope-of-work", num: "04", title: "Scope of work", href: "scope-of-work.html", group: "Proposal Sections", desc: "In-scope workstreams, deliverables, and sign-off matrix." },
  { id: "project-methodology", num: "05", title: "Project Methodology", href: "project-methodology.html", group: "Proposal Sections", desc: "Phase-gated delivery framework and timeline." },
  { id: "project-management", num: "06", title: "Project Management", href: "project-management.html", group: "Proposal Sections", desc: "Governance cadence, team roles, and RAID management." },
  { id: "scope-exclusions", num: "07", title: "Scope considerations and exclusions", href: "scope-exclusions.html", group: "Proposal Sections", desc: "Assumptions, explicit exclusions, and dependencies." },
  { id: "appendix-company-profile", num: "08", title: "Appendix I - Company profile", href: "appendix-company-profile.html", group: "Appendices", desc: "About KaarTech, global footprint, and capabilities." },
  { id: "appendix-certifications", num: "09", title: "Appendix II - Certifications", href: "appendix-certifications.html", group: "Appendices", desc: "ISO, CMMI, security, and partner accreditations." },
  { id: "appendix-case-studies", num: "10", title: "Appendix III - Case studies", href: "appendix-case-studies.html", group: "Appendices", desc: "Selected client transformations and measurable outcomes." }
];

window.ProposalApp = {
  escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  },

  initShell(activePageId) {
    const data = window.PROPOSAL_DATA;
    const pages = window.PROPOSAL_PAGES;
    const currentIndex = pages.findIndex((p) => p.id === activePageId);
    const currentPage = pages[currentIndex] || pages[0];

    document.title = `${currentPage.title} | ${data.meta.brandName} — ${data.meta.proposalTitle}`;

    // Build Sidebar HTML
    const groups = ["Overview", "Proposal Sections", "Appendices"];
    const navHtml = groups
      .map((group) => {
        const items = pages.filter((p) => p.group === group);
        const links = items
          .map((p) => {
            const isActive = p.id === activePageId ? "active" : "";
            return `
              <a class="nav-link ${isActive}" href="${p.href}">
                <span class="nav-num">${p.num}</span>
                <span>${this.escapeHtml(p.title)}</span>
              </a>
            `;
          })
          .join("");
        return `<div class="nav-group-label">${group}</div>${links}`;
      })
      .join("");

    const sidebarEl = document.getElementById("app-sidebar");
    if (sidebarEl) {
      sidebarEl.innerHTML = `
        <div class="sidebar-brand">
          <div class="brand-mark">${this.escapeHtml(data.meta.brandInitials)}</div>
          <div class="brand-text">
            <span class="brand-name">${this.escapeHtml(data.meta.brandName)}</span>
            <span class="brand-tagline">${this.escapeHtml(data.meta.brandTagline)}</span>
          </div>
        </div>
        <div class="sidebar-meta">
          <div class="sidebar-meta-label">Prepared For</div>
          <div class="sidebar-meta-client" title="${this.escapeHtml(data.meta.clientName)}">
            ${this.escapeHtml(data.meta.clientName)}
          </div>
        </div>
        <nav class="sidebar-nav" aria-label="Proposal Sections">
          ${navHtml}
        </nav>
        <div class="sidebar-footer">
          <button class="btn-print" onclick="window.print()" type="button">
            ⎙ Print / Save as PDF
          </button>
          <div>ID: ${this.escapeHtml(data.meta.proposalId)} • ${this.escapeHtml(data.meta.date)}</div>
        </div>
      `;
    }

    // Build Topbar HTML
    const topbarEl = document.getElementById("app-topbar");
    if (topbarEl) {
      topbarEl.innerHTML = `
        <div class="topbar-left">
          <button class="mobile-menu-btn" id="mobile-menu-toggle" type="button" aria-label="Toggle navigation">☰</button>
          <div class="breadcrumb">
            <a href="index.html">${this.escapeHtml(data.meta.proposalTitle)}</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${this.escapeHtml(currentPage.title)}</span>
          </div>
        </div>
        <div class="topbar-right">
          <span class="proposal-badge">
            <span class="status-dot"></span>
            ${this.escapeHtml(data.meta.statusBadge)}
          </span>
        </div>
      `;

      const toggleBtn = document.getElementById("mobile-menu-toggle");
      if (toggleBtn && sidebarEl) {
        toggleBtn.addEventListener("click", () => {
          sidebarEl.classList.toggle("open");
        });
      }
    }

    // Build Prev / Next Pagination
    const paginationEl = document.getElementById("page-pagination");
    if (paginationEl) {
      const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
      const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

      paginationEl.innerHTML = `
        ${
          prev
            ? `<a class="page-nav-btn prev" href="${prev.href}">
                 <span class="page-nav-dir">← Previous</span>
                 <span class="page-nav-title">${this.escapeHtml(prev.num + ". " + prev.title)}</span>
               </a>`
            : `<div></div>`
        }
        ${
          next
            ? `<a class="page-nav-btn next" href="${next.href}">
                 <span class="page-nav-dir">Next →</span>
                 <span class="page-nav-title">${this.escapeHtml(next.num + ". " + next.title)}</span>
               </a>`
            : `<div></div>`
        }
      `;
    }
  }
};
