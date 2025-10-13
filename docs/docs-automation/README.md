# Documentation automation overview

This folder contains the work I did regarding documentation automation. The goal was to practice setting up automated workflows for linting, validation, and documentation using tools like Vale and Spectral.

---

## Lint markdown with vale 🚀

> **🗝️ Goal:**  
Run Vale automatically on all Markdown files in the repository whenever a commit is made, ensuring consistent style and detecting issues early.

**What I did:**

* Linted markdown files using the Google developers style guide. 
* Added a sample page in this folder alongside a page that contains some of the results of the vale lint. 
* Added a GitHub Action workflow that automatically triggers linting and link checks whenever there's a push. 

---

## Validate OpenAPI specs and generate docs 🔗

> **🗝️Goal:**  
Validate OpenAPI 3.0 specs using Spectral and generate static API documentation using Redocly.


**What I did:**

* Created a spectral configuration file at the root of the repository.
* Added a GitHub Action workflow that:

  * Runs Spectral linting on all `.yaml` files in the repository.
  * Builds a Redocly static site output from the OpenAPI file.
  * Added a sample OpenAPI specification file.
  * Rendered the generated Redocly output in the page 'API References'


---

## Wrap-up

Through these two tasks, I was able to:

* Automate linting for Markdown docs.
* Validate and standardize OpenAPI specs.
* Generate and embed static API reference docs into my Docusaurus site.

This ensures documentation is consistent, validated, and easy to consume.

---
