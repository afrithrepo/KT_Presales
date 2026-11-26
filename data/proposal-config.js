/**
 * ============================================================================
 * KAARTECH TECHNICAL PROPOSAL TEMPLATE — CENTRALIZED CONFIGURATION
 * ============================================================================
 * How to customize for a new client proposal:
 * 1. Update `meta` with the client name, project title, date, and author.
 * 2. Edit each section's content below to match your technical solution.
 * 3. Save this file and refresh any page in the browser — all 11 pages
 *    (Home + 10 sections) update automatically!
 * ============================================================================
 */

window.PROPOSAL_DATA = {
  meta: {
    brandName: "KaarTech",
    brandInitials: "KT",
    brandTagline: "Technical Proposal",
    proposalTitle: "Technical Proposal",
    projectTitle: "[Project Title: e.g., Enterprise Digital Core & Cloud Transformation]",
    subtitle:
      "A tailored technical blueprint, delivery methodology, and governance framework designed to accelerate business outcomes.",
    clientName: "[Client Organization Name]",
    clientIndustry: "[Industry / Sector]",
    proposalId: "KT-PROP-2026-001",
    date: "November 2026",
    validUntil: "90 Days from Issue",
    preparedBy: "[Presales Consultant / Solution Architect]",
    statusBadge: "Confidential • Technical Proposal"
  },

  home: {
    welcomeHeading: "Welcome to the Technical Proposal",
    welcomeText:
      "This interactive web proposal replaces traditional static documents with a structured, easy-to-navigate digital experience. Use the sidebar or the section cards below to explore our solution architecture, scope of work, delivery methodology, governance model, and supporting appendices."
  },

  executiveSummary: {
    lead: "High-level overview of the proposed engagement, strategic alignment, and expected business value.",
    overview:
      "KaarTech is pleased to submit this Technical Proposal to [Client Organization Name]. Our proposed solution addresses your core operational challenges by establishing a scalable, secure, and future-ready technology foundation. By combining industry best practices with proven accelerators, we aim to minimize implementation risk while accelerating time-to-value.",
    kpis: [
      { value: "20–30%", label: "Process Efficiency Gain", note: "Through automation & streamlined workflows" },
      { value: "99.9%", label: "Target System Availability", note: "Resilient cloud-native architecture" },
      { value: "16 Weeks", label: "Target Delivery Timeline", note: "Phased, milestone-driven execution" },
      { value: "100%", label: "Standards Compliance", note: "Aligned with enterprise security policies" }
    ],
    strategicObjectives: [
      "Modernize legacy processes into a unified, real-time digital platform.",
      "Eliminate data silos and enable executive visibility through governed analytics.",
      "Ensure seamless integration with existing enterprise applications and third-party systems.",
      "Establish a maintainable architecture with clear operational handover and enablement."
    ],
    valueProposition:
      "Our approach prioritizes measurable business outcomes over pure technical deployment—embedding change management, rigorous quality gates, and reusable templates from Day 1."
  },

  customerRequirements: {
    lead: "Summary of our understanding of your current landscape, business drivers, and technical requirements.",
    businessContext:
      "[Client Organization Name] is seeking to modernize its core operations to support rapid growth, improve cross-functional visibility, and reduce manual overhead across key business units.",
    painPoints: [
      "Fragmented systems leading to manual data reconciliation and reporting delays.",
      "Limited scalability and high maintenance overhead in current legacy workflows.",
      "Lack of real-time operational dashboards for leadership decision-making.",
      "Inconsistent security, auditability, and role-based access controls."
    ],
    functionalRequirements: [
      { id: "FR-01", area: "Core Operations", requirement: "End-to-end digital workflow automation across primary business processes.", priority: "High" },
      { id: "FR-02", area: "Integrations", requirement: "Bi-directional API/event-driven integration with existing ERP/CRM systems.", priority: "High" },
      { id: "FR-03", area: "Reporting & Analytics", requirement: "Role-based executive dashboards and exportable operational reports.", priority: "Medium" },
      { id: "FR-04", area: "User Experience", requirement: "Responsive, intuitive web interface accessible across desktop and mobile.", priority: "Medium" }
    ],
    nonFunctionalRequirements: [
      { category: "Performance", target: "Sub-2 second response time for standard transactions under peak load." },
      { category: "Security", target: "SSO/MFA integration, TLS 1.3 in transit, AES-256 encryption at rest." },
      { category: "Availability", target: "99.9% uptime SLA with automated backup and disaster recovery." },
      { category: "Scalability", target: "Horizontal auto-scaling to support 3x projected transaction volume." }
    ]
  },

  solutionArchitecture: {
    lead: "End-to-end technical architecture, component layers, security posture, and integration patterns.",
    overview:
      "The proposed architecture follows a modular, cloud-ready, layered design. Each layer is decoupled to ensure independent scalability, maintainability, and strict security boundaries.",
    principles: [
      "API-First & Event-Driven Integration",
      "Zero-Trust Security & Role-Based Access",
      "Cloud-Native Resilience & Observability",
      "Clean Core & Low-Code Extensibility"
    ],
    layers: [
      {
        name: "1. Experience & Presentation Layer",
        tag: "Frontend",
        description: "Unified, responsive web portal and mobile-ready interfaces with SSO authentication.",
        components: ["Web Portal UI", "Role-Based Dashboards", "Self-Service Forms", "Identity & SSO (SAML/OIDC)"]
      },
      {
        name: "2. Integration & API Gateway Layer",
        tag: "Middleware",
        description: "Centralized API management, rate limiting, schema validation, and asynchronous event routing.",
        components: ["API Gateway", "REST / GraphQL Endpoints", "Event Bus / Message Queue", "ETL / Data Pipelines"]
      },
      {
        name: "3. Core Application & Business Logic Layer",
        tag: "Core Platform",
        description: "Modular microservices or enterprise platform core executing business rules and workflows.",
        components: ["Workflow Engine", "Business Rules Service", "Notification Service", "Audit & Compliance Engine"]
      },
      {
        name: "4. Data, Analytics & Infrastructure Layer",
        tag: "Foundation",
        description: "Managed relational/analytical databases, automated CI/CD, monitoring, and DR.",
        components: ["Transactional DB", "Analytics Warehouse", "CI/CD Pipelines", "SIEM & Observability"]
      }
    ],
    integrationNotes:
      "All external integrations will use standardized REST/OData or event-driven patterns with retry policies, dead-letter queues, and centralized logging."
  },

  scopeOfWork: {
    lead: "Detailed breakdown of in-scope workstreams, deliverables, and responsibility boundaries.",
    overview:
      "The Scope of Work is organized into clearly defined workstreams to ensure transparency, predictable milestones, and unambiguous sign-off criteria.",
    workstreams: [
      {
        title: "Workstream 1: Discovery & Architecture Design",
        items: [
          "Conduct stakeholder workshops and finalize functional specifications.",
          "Deliver High-Level Design (HLD) and Low-Level Design (LLD) documents.",
          "Define data migration mapping and integration interface specifications."
        ]
      },
      {
        title: "Workstream 2: Core Build & Configuration",
        items: [
          "Provision target environments (DEV, QA, PROD).",
          "Configure core modules, workflows, and custom extensions.",
          "Develop and unit-test required APIs and system integrations."
        ]
      },
      {
        title: "Workstream 3: Testing, Migration & Cutover",
        items: [
          "Execute System Integration Testing (SIT) and support User Acceptance Testing (UAT).",
          "Perform mock data loads and production data migration.",
          "Execute cutover plan, Go-Live support, and hypercare."
        ]
      }
    ],
    deliverablesTable: [
      { id: "DEL-01", deliverable: "Solution Blueprint & Architecture Document", phase: "Design", owner: "KaarTech", signoff: "Client Tech Lead" },
      { id: "DEL-02", deliverable: "Configured DEV & QA Environments", phase: "Build", owner: "KaarTech", signoff: "Client Infra Lead" },
      { id: "DEL-03", deliverable: "Integration & Migration Scripts", phase: "Build", owner: "KaarTech", signoff: "Client Architect" },
      { id: "DEL-04", deliverable: "SIT & UAT Test Summary Reports", phase: "Test", owner: "Joint", signoff: "Client PM" },
      { id: "DEL-05", deliverable: "Runbooks, Training & Hypercare Handover", phase: "Deploy", owner: "KaarTech", signoff: "Client Operations" }
    ]
  },

  projectMethodology: {
    lead: "Structured, phase-gated delivery methodology ensuring quality, predictability, and rapid value.",
    overview:
      "We follow an agile-hybrid, phase-gated delivery methodology tailored for enterprise implementations. Each phase concludes with a formal quality gate review and deliverable sign-off.",
    frameworkName: "KaarTech Hybrid Agile Delivery Framework",
    phases: [
      {
        step: "Phase 01",
        name: "Discover & Prepare",
        duration: "Weeks 1 – 2",
        activities: [
          "Project kickoff & governance setup",
          "Requirement validation workshops",
          "Environment & access provisioning"
        ]
      },
      {
        step: "Phase 02",
        name: "Explore & Design",
        duration: "Weeks 3 – 5",
        activities: [
          "Fit-to-standard gap analysis",
          "HLD / LLD & integration specs",
          "UI/UX prototype walkthrough"
        ]
      },
      {
        step: "Phase 03",
        name: "Realize & Test",
        duration: "Weeks 6 – 12",
        activities: [
          "Iterative sprint builds & demos",
          "SIT & performance testing",
          "User Acceptance Testing (UAT)"
        ]
      },
      {
        step: "Phase 04",
        name: "Deploy & Hypercare",
        duration: "Weeks 13 – 16",
        activities: [
          "Production cutover & data load",
          "End-user training & enablement",
          "4-week hypercare & BAU handover"
        ]
      }
    ]
  },

  projectManagement: {
    lead: "Governance structure, communication cadence, team roles, and proactive risk management.",
    overview:
      "Strong project governance is central to on-time, on-budget delivery. We establish a joint governance model with clear escalation paths and transparent weekly reporting.",
    governanceCadence: [
      { forum: "Daily Stand-up", frequency: "Daily (15 mins)", attendees: "Delivery Leads & Core Squad", purpose: "Track sprint progress and unblockers" },
      { forum: "Weekly Status Review", frequency: "Weekly", attendees: "Client PM & KaarTech PM", purpose: "Review milestones, RAID log, and burn rate" },
      { forum: "Steering Committee", frequency: "Monthly / Gate-based", attendees: "Executive Sponsors", purpose: "Strategic decisions, scope changes, gate sign-offs" }
    ],
    teamStructure: [
      { role: "Engagement Director", responsibility: "Executive sponsorship, escalation point, overall quality assurance." },
      { role: "Project Manager", responsibility: "Day-to-day planning, RAID management, milestone tracking, reporting." },
      { role: "Solution Architect", responsibility: "End-to-end technical design, integration standards, security compliance." },
      { role: "Functional & Technical Leads", responsibility: "Configuration, custom development, testing, and knowledge transfer." }
    ],
    riskManagement:
      "All risks, assumptions, issues, and dependencies (RAID) are tracked in a shared register reviewed weekly with severity-based mitigation owners."
  },

  scopeExclusions: {
    lead: "Key project assumptions, explicit exclusions, and client dependencies to ensure clarity.",
    assumptions: [
      "Client will provide timely access to environments, VPNs, and relevant SMEs within 5 business days of request.",
      "All third-party software licenses and cloud infrastructure subscriptions will be procured by the Client.",
      "Single language (English) and standard business hours support unless otherwise specified in commercial terms.",
      "Client data provided for migration will be cleansed and validated prior to final cutover."
    ],
    exclusions: [
      "Hardware procurement, data center cabling, or end-user workstation upgrades.",
      "Remediation of legacy third-party systems not explicitly listed in the Scope of Work.",
      "Ongoing L1/L2 managed services post-hypercare (available under a separate AMS agreement).",
      "Customizations or change requests raised after UAT sign-off (handled via Change Request process)."
    ],
    dependencies: [
      "Availability of Client Product Owner for sprint demos and UAT sign-off within agreed SLAs.",
      "Readiness of external API endpoints owned by third-party vendors."
    ]
  },

  companyProfile: {
    lead: "About KaarTech — our heritage, global delivery footprint, and enterprise transformation expertise.",
    overview:
      "KaarTech is a global digital transformation and enterprise consulting partner specializing in helping organizations modernize their core business systems, adopt cloud-native architectures, and unlock data-driven agility.",
    stats: [
      { value: "20+", label: "Years of Excellence", note: "Delivering enterprise transformations" },
      { value: "3,000+", label: "Consultants", note: "Certified functional & cloud specialists" },
      { value: "15+", label: "Global Offices", note: "Serving North America, EMEA & APAC" },
      { value: "500+", label: "Successful Projects", note: "Across diverse industry verticals" }
    ],
    coreCapabilities: [
      "Enterprise ERP & Digital Core Transformation (SAP S/4HANA, BTP, Cloud)",
      "Cloud Engineering, DevSecOps & Application Modernization",
      "Data Engineering, Analytics & Enterprise AI Solutions",
      "Managed Services (AMS) & 24/7 Global Support"
    ],
    globalPresence:
      "With delivery centers across India, the Middle East, Europe, and North America, KaarTech provides a follow-the-sun delivery model combining onshore leadership with offshore scale."
  },

  certifications: {
    lead: "Industry certifications, quality standards, and partner accreditations.",
    overview:
      "Our delivery processes and security posture are backed by internationally recognized certifications and strategic technology partner accreditations.",
    items: [
      { title: "ISO/IEC 27001", category: "Information Security", description: "Certified Information Security Management System ensuring strict data protection." },
      { title: "ISO 9001:2015", category: "Quality Management", description: "Standardized quality management across consulting, delivery, and support." },
      { title: "CMMI Level 3+", category: "Process Maturity", description: "Disciplined, repeatable software engineering and project management practices." },
      { title: "SAP Gold Partner", category: "Strategic Alliance", description: "Recognized expertise across SAP S/4HANA, Cloud, and Business Technology Platform." },
      { title: "Cloud Partner Competencies", category: "Hyperscalers", description: "Certified architects across AWS, Microsoft Azure, and Google Cloud Platform." },
      { title: "SOC 2 Type II", category: "Compliance", description: "Audited controls for security, availability, and processing integrity." }
    ]
  },

  caseStudies: {
    lead: "Proven track record — selected client success stories and measurable outcomes.",
    overview:
      "Below are representative engagements demonstrating how our technical approach translates into tangible business impact. Replace these with your industry-specific references.",
    studies: [
      {
        client: "Global Manufacturing Enterprise",
        industry: "Industrial Manufacturing",
        challenge: "Disconnected legacy ERP instances causing 10-day financial close cycles and poor inventory visibility.",
        solution: "Implemented a unified digital core with automated supply chain workflows and real-time executive analytics.",
        outcomes: ["40% faster month-end close", "99.5% inventory accuracy", "Delivered on schedule in 20 weeks"]
      },
      {
        client: "Regional Energy & Utilities Leader",
        industry: "Energy & Utilities",
        challenge: "Manual field service scheduling and high integration maintenance costs across 12 legacy apps.",
        solution: "Architected an API-first integration hub and mobile-enabled field service portal on cloud infrastructure.",
        outcomes: ["35% reduction in dispatch time", "60% fewer integration failures", "Full SSO & audit compliance"]
      },
      {
        client: "Multi-Country Retail Group",
        industry: "Retail & Distribution",
        challenge: "Peak-season performance bottlenecks and lack of omnichannel order visibility.",
        solution: "Migrated core workloads to auto-scaling cloud architecture with event-driven order orchestration.",
        outcomes: ["3x peak load capacity", "99.95% uptime during peak", "25% lower infrastructure TCO"]
      }
    ]
  }
};
