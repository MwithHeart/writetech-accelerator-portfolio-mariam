---
slug: render-with-redocly
title: How to Render an OpenAPI YAML file in Docusaurus Using Redocly
authors: [mariam]
tags: [docusaurus]
---

This guide explains how to render an OpenAPI YAML file in Docusaurus using redocly.  

In this guide, I generated an html file (api.html) from the yaml file (api-doc.yaml) and then rendered it using iframe.

## Step 1: Confirm build output
When you run:
```npx @redocly/cli@latest build-docs docs/docs-automation/api-doc.yaml -o static/api.html```

**Note:** the code is on one line


You should now have a file at: 
 /your-project-root/static/api.html

:::note  
Check if that file actually exists in your project.
:::


## Step 2: How Docusaurus serves static/
Docusaurus serves any file in the static/ folder at the root URL.
So:
  - `static/api.html` opens at http://localhost:3000/api.html
  - `static/something/test.txt` opens at http://localhost:3000/something/test.txt


>Note:  
>If you can’t open http://localhost:3000/api.html, it means either:
>  - the file wasn’t generated, or
>  - it’s in the wrong folder (not under static/)




## Step 3: Link from sidebar doc
In your docs/docs-automation/api-ref.md, the link should be:
[Open API Reference](/api.html)

## Step 4. Embed inside a page
If you want to guarantee it loads within Docusaurus pages, add an iframe to api-ref.md:  
```  <iframe
    src="/api.html"
    width="137%"
    height="950"
    style={{ border: '1px solid #ddd', borderRadius: '8px' }}
  />```


