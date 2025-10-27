---
title: Welcome
description: Portfolio of Mariam Yusuff - Technical Writer for APIs, DevOps, and Cloud Documentation.
---

<div className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Mariam Yusuff</h1>
    <p className="hero-subtitle">Technical Writer | API & Developer Documentation Specialist</p>
  </div>
</div>

<div className="intro-card">
  <h2>About me</h2>
  <p>I transform complex technical concepts into clear, accessible documentation that helps developers and teams succeed.</p>
  
  <div className="features-grid">
    <div className="feature-card">
      <h3>Reduces Onboarding Time</h3>
      <p>Clear documentation that helps new developers get up to speed quickly.</p>
    </div>
    
    <div className="feature-card">
      <h3>Minimizes Confusion</h3>
      <p>Precise, well-structured content that answers questions before they're asked.</p>
    </div>
    
    <div className="feature-card">
      <h3>Boosts Productivity</h3>
      <p>Documentation that helps developers focus on building, not figuring things out.</p>
    </div>
  </div>
  
  <div className="cta-container">
    <a href="mailto:mariamyusuff0000@gmail.com" className="cta-button">
      Let's Work Together →
    </a>
  </div>
</div>

      
## Core expertise & featured projects

<div className="project-card">
  <div className="project-header">
    <h3>Documentation auditing & SSGs</h3>
  </div>
  <div className="project-content">
    <p>Explored Static Site Generators and refined the documentation for <strong>PixiEditor</strong>, an open source 2D drawing tool, focusing on structure, clarity, and consistency.</p>
    <a href="./documentation-tooling/intro.mdx" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-header">
    <h3>API documentation & OpenAPI</h3>
  </div>
  <div className="project-content">
    <p>Enhanced documentation for **Chimoney API,** rendered OpenAPI specs, and drafted new **Dribbble API** Quickstart & Authentication pages.</p>
    <a href="./api-documentation/intro" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-header">
    <h3>DevOps & Cloud documentation</h3>
  </div>
  <div className="project-content">
    <p>Created a step-by-step guide for setting up **GitHub Actions**, including a sample CI/CD pipeline with Lychee broken-link checker.</p>
    <a href="./devops-cloud-documentation/intro" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-header">
    <h3>DevOps & Cloud documentation</h3>
  </div>
  <div className="project-content">
    <p>Created a step-by-step guide for setting up **GitHub Actions**, including a sample CI/CD pipeline with Lychee broken-link checker.</p>
    <a href="./devops-cloud-documentation/intro" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-header">
    <h3>Documentation automation</h3>
  </div>
  <div className="project-content">
    <p>Implemented automated checks using **Vale**, **Spectral**, and **GitHub Actions** to ensure style consistency, link integrity, and build reliability across projects</p>
    <a href="./docs-automation/intro" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-header">
    <h3>AI for documentation</h3>
  </div>
  <div className="project-content">
    <p>Documented a model card for <strong>Qwen-3</strong> and used AI-assisted techniques to generate FAQ sections for accessibility.</p>
    <a href="./ai-documentation/intro" className="project-link">View Project →</a>
  </div>
</div>

<div className="project-card">
  <div className="project-header">
    <h3>Technical writing in Web3</h3>
  </div>
  <div className="project-content">
    <p>Documented two endpoints of the <strong>Moralis Web3 API</strong>, creating clear reference guides that simplify blockchain concepts for developers.</p>
    <a href="./web3-documentation/api-intro" className="project-link">View Project →</a>
  </div>
</div>



<style>{`
  .hero {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    padding: 4rem 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin: 0;
    color: #2c3e50;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: #4a5568;
    margin: 0.5rem 0 0;
  }
  
  .intro-card, .project-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    margin: 2rem 0;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .feature-card {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-4px);
  }
  
  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .cta-container {
    text-align: center;
    margin-top: 2rem;
  }
  
  .cta-button {
    display: inline-block;
    background: #4f46e5;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.2s ease;
  }
  
  .cta-button:hover {
    background: #4338ca;
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .project-tag {
    background: #e0e7ff;
    color: #4f46e5;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .project-link {
    display: inline-block;
    margin-top: 1rem;
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;
  }
  
  .project-link:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
    }
    
    .hero {
      padding: 3rem 1rem;
    }
    
    .hero-title {
      font-size: 2rem;
    }
  }
`}</style>

## My approach
<div className="project-card">
  <div className="project-content">
    <ul>
      <li>Collaboration: Partnering with engineers, designers, and PMs to build docs grounded in real workflows.</li>
      <li>Continuous learning: Every project is an opportunity to learn a new tool, framework, or documentation best practice.</li>
      <li>Clarity & empathy: Writing for both the engineer and the end-user, because great docs serve both.</li>
    </ul>
  </div>
</div>

## Tools & technologies
<div className="project-card">
  <div className="project-content">
    <p>
      `Docusaurus` • `Markdown` • `OpenAPI` • `GitHub Actions` • `Vale` • `Spectral` • `Postman` • `CI/CD`
    </p>
  </div>
</div>


## Connect with me
<div className="project-card">
  <div className="project-content">
    <ul>
     <li>📞 +2348069794294</li>
     <li>📧<a href="mailto:mariamyusuff0000@gmail.com" className="project-link">Email →</a></li>
     <li>💻 <a href="https://github.com/MwithHeart/writetech-accelerator-portfolio-mariam" className="project-link">GitHub →</a></li>
     <li>💼 <a href="https://linkedin.com/in/yusuff-mariam" className="project-link">LinkedIn →</a></li>
     <li>📝 <a href="https://mwithheart.hashnode.dev" className="project-link">Hashnode →</a></li>
    </ul>
  </div>
</div>

💬 Let’s talk about improving developer experiences through documentation.

