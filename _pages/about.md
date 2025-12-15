---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* Hero Banner Styles */
.hero-banner {
  padding: 4rem 1rem;
  margin-bottom: 2rem;
  background-color: #f0f4f8; /* Distinct light blue-gray */
  border-bottom: 1px solid #e0e0e0;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333; /* Make sure it's readable */
}

.hero-title {
  font-size: 1.5rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 1rem;
}

.hero-motto {
  font-size: 1.25rem;
  font-family: inherit;
  font-style: italic;
  margin-bottom: 2rem;
  color: #555;
  border-left: 4px solid #333;
  padding-left: 1rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-hero {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px; /* Slightly rounded for modern feel */
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Section Styles */
.section-portfolio, .section-cv {
  padding: 4rem 1rem; /* Generous whitespace */
  border-bottom: 1px solid #f0f0f0;
}

.section-portfolio h2, .section-cv h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

/* Dark Mode Adjustments provided by theme usually, but adding overrides if needed */
[data-theme="dark"] .hero-name { color: #f0f0f0; }
[data-theme="dark"] .hero-title { color: #aaa; }
[data-theme="dark"] .hero-motto { color: #ccc; border-left-color: #eee; }
</style>

<div class="hero-banner">
  <h1 class="hero-name">Kim Guyet</h1>
  <h2 class="hero-title">UX Designer</h2>
  <p class="hero-motto">see. think. interact. rethink.</p>
  
  <div class="hero-buttons">
    <a href="#portfolio" class="btn btn--info btn--large">View Portfolio</a>
    <a href="#cv" class="btn btn--inverse btn--large">Download CV</a>
  </div>
</div>

<div id="portfolio" class="section-portfolio">
  <h2>UX Portfolio</h2>
  <p><i>Selected works coming soon.</i></p>
  <!-- Placeholder for future cards -->
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
    <div style="background: #f8f9fa; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px dashed #ccc; color: #999;">Case Study Placeholder</div>
    <div style="background: #f8f9fa; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px dashed #ccc; color: #999;">Case Study Placeholder</div>
  </div>
</div>

<div id="cv" class="section-cv">
  <h2>Curriculum Vitae</h2>
  <p>A comprehensive view of my academic and professional journey.</p>
  
  <div style="margin-top: 2rem; padding: 2rem; background: #f9f9f9; border: 1px solid #ddd; border-radius: 4px;">
    <p><strong>Accessible CV (PDF)</strong></p>
    <p><i>The full CV document will be available for download here.</i></p>
    <button class="btn btn--primary" disabled style="opacity: 0.6; cursor: not-allowed;">Download CV (Coming Soon)</button>
  </div>
</div>
