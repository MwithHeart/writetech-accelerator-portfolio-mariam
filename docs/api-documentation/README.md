# Chimoney API documentation overview
This project documents key parts of the Chimoney REST API including:
    - A [Getting started](./getting-started.md) section
    - Two endpoints written in Markdown: [Verify a payment](./reference/verify.md) and [Generate invoice with AI](./reference/generate-invoice.md)
    - An [endpoint rendered using the docusaurus open-api plugin](./api-reference/generates-an-invoice-based-on-provided-instructions.api.mdx)
    

## About Chimoney
Chimoney is a platform that allows for efficient payments across borders, multi-currency wallets and global payouts.  
You can check the website site [here](https://chimoney.io).


## Improvements 
1. **Improved Onboarding:** The actual ```getting started``` page seems like a simple guide that talks about products that can be built with the API. I restructured it into something more hands-on, including:
    - How to create an account
    - Authentication
    - The base URL
    - A sample Postman request

2. **Structured Endpoint Pages** Created pages for two endpoints implementing proper structure and codeblocks for displaying responses. 


## Challenges
- Getting an API key on the Chimoney sandbox was confusing initially.


## Key takeaways
- I learnt how to test API endpoints with postman. 
- I learnt how to interpret OpenAPI specification

## Tools & tech stack used

| Tool / Technology | Purpose |
|-------------------|---------|
| YAML | The format for writing OpenAPI specification |
| Swagger Editor | Writing OpenAPI specification |
| Postman | For testing API endpoints |
| Docusaurus OpenAPI plugin | For rendering the YAML file |


