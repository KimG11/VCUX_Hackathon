# Personal Digital Presence Website – PRD

## Header
- **Project Name:** Personal Digital Presence Website
- **Date:** 2025-12-15
- **Author(s):** Kim Guyet
- **Version:** v1.0
- **Short Pitch:** Transform a blank Academic Pages website template into a fully customized personal digital presence that communicates professional identity through a tailored theme, personalized landing page, accessible CV, and interactive portfolio.
- **Relevant Links:**
  - Academic Pages Template (GitHub): https://github.com/academicpages/academicpages.github.io

---

## 1) Core Context

### Problem
Existing website templates provide structure but fail to represent individual identity, professional narrative, and portfolio work without significant customization. A blank template does not effectively communicate skills, experience, or personal brand.

### Solution
Customize the Academic Pages template into a cohesive, accessible, and interactive personal web profile that serves as a professional digital presence.

### Target Users
- Primary: Recruiters, collaborators, hiring managers
- Secondary: Peers, academic or professional networks, potential clients

### Primary Use Cases
- View professional overview and personal brand
- Access and download an accessible CV
- Explore portfolio projects interactively
- Contact or learn more about the individual

### North-Star Metric
- Percentage of visitors who engage with at least one portfolio project or download the CV

### Non-Goals
- Building a full CMS
- Supporting user accounts or authentication
- Monetization or e-commerce features

---

## 2) UX Foundations

### Personas
- **Recruiter Rita:** Time-constrained, scans for credibility, skills, and impact
- **Collaborator Alex:** Interested in projects, tools, and ways to connect

### Key Insights / Pain Points
- Users decide credibility within seconds
- Static CVs are hard to parse and inaccessible
- Portfolios without context fail to show impact

### Experience Principles / Vibe
- Professional but personal
- Clear, scannable, and calm
- Accessible by default

### Accessibility & Inclusion Requirements
- WCAG 2.1 AA compliance
- Semantic HTML and ARIA labels
- Keyboard navigation and screen-reader friendly CV

### High-Level Journey
Landing page → About summary → CV → Portfolio project → Contact

---

## 3) Scope & Priorities

### MVP (V1) Goals
- Custom visual theme (colors, typography)
- Personalized hero/landing page
- Accessible CV page (HTML + downloadable PDF)
- One interactive portfolio project

### Out of Scope
- Blog with commenting system
- Analytics dashboard
- Multi-language support (future)

### Assumptions & Risks
- Assumes familiarity with Markdown and GitHub Pages
- Risk of over-customization increasing maintenance cost

---

## 4) Tech Overview

### Frontend
- Jekyll (via Academic Pages)
- HTML, CSS, Markdown

### Backend
- None (static site)

### Database
- None

### APIs / Integrations
- GitHub Pages
- Optional: Google Fonts

### Deployment
- GitHub Pages (CI via GitHub Actions)

### Security / Privacy
- No user data collection
- HTTPS via GitHub Pages

---

## 5) Feature Modules

### Module 1: Custom Theme (P0)
**User Story:** As a visitor, I want the site to feel visually distinctive and professional so I can quickly understand the owner's identity.

**Acceptance Criteria:**
- Custom color palette applied site-wide
- Typography updated from default
- Theme is consistent across pages

---

### Module 2: Personalized Landing Page (P0)
**User Story:** As a visitor, I want a clear introduction and value proposition on the homepage.

**Acceptance Criteria:**
- Hero section with name, role, and short tagline
- Clear navigation to CV and portfolio
- Responsive across devices

---

### Module 3: Accessible CV (P0)
**User Story:** As a recruiter, I want to easily read and download an accessible CV.

**Acceptance Criteria:**
- CV rendered as semantic HTML
- Downloadable PDF version
- Screen-reader and keyboard accessible

---

### Module 4: Interactive Portfolio Project (P1)
**User Story:** As a collaborator, I want to explore a project interactively to understand skills and impact.

**Acceptance Criteria:**
- Project includes description, visuals, and outcomes
- At least one interactive element (filter, toggle, demo)
- Clear explanation of role and tools used

---

## 6) AI Design
_Not applicable for V1_

---

## 7) IA, Flows & UI

### Main Screens
- Home
- About / CV
- Portfolio

### Key Flows
Home → CV → Download
Home → Portfolio → Project Detail

### Design Tokens / Components
- Color variables
- Typography scale
- Button and link styles

### Localization / Tone
- English
- Professional, first-person tone

---

## 8) Iteration & Workflow

### Sprint Rhythm
- Weekly iterations

### Review Process
- Self-review against acceptance criteria
- Accessibility checks before release

### Spike / Risk Items
- Accessibility validation
- Cross-browser testing

---

## 9) Quality

### Testing Requirements
- Manual functional testing
- Accessibility audit (Lighthouse)

### Accessibility Checks
- Keyboard navigation
- Screen-reader testing

### Performance Targets
- Lighthouse performance score ≥ 90

---

## 10) Metrics & Analytics

### Events & Data
- CV download clicks
- Portfolio project interactions

### KPIs
- Engagement rate
- Time on portfolio page

### Experimentation / A/B Plans
- None for V1

---

## 11) Launch & Operations

### Environments
- Local development
- Production (GitHub Pages)

### Rollout Plan
- Soft launch via personal network

### Support & Maintenance
- Periodic content updates
- Dependency updates as needed

