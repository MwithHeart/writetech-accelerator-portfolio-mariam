---
title: Getting started
# sidebar_position: 1
toc_min_heading: 2
toc_max_heading: 6
---

# Getting started   

👋🏽 **Welcome to the Chimoney API**   
This API allows you to make payouts seamlessly, whether you are a business owner or a developer just exploring the platform.


## Create an account
Before you can start making API calls, you need to create an account. 

### Businesses integrating with the API
1. Create an account at [dash.chimoney.io](https://dash.chimoney.io). The dashboard page shows up after this.
2. Book a demo or email support@chimoney.io to request "Verification and API Access." Ensure you include links to your website and explain its use case briefly.
 Alternatively book-a-demo


### Developers testing the API 
1. Create an account at the [sandbox](https://Sandbox.Chimoney.io).
:::note  
Your sandbox account is automatically funded with $1000 of test credits.
:::

2. Download the Chimoney app.
3. Click the Organizations tab on the dashboard and create an organization or team.
4. Open the Developers tab to create an app and use the API keys to access the sandbox endpoints.

▶️ Watch this [video](https://www.loom.com/share/436303eb69c44f0d9757ea0c655bed89?sid=b6a0f661-721c-4731-9873-ae6f2d25780) for step-by-step guidance.  

## The base URLs
Chimoney provides two base URLs: one for production, one for sandbox testing:  

| Environment | URL |
|-------------|-----|
| Production | `https://api.chimoney.io` |
| Sandbox | `https://api-v2-sandbox.chimoney.io` |

## Authentication 
The Chimoney API uses an API Key for authentication. 
1. Copy your API key from the [developer dashboard](https://dash.chimoney.io/developers).

2. Include it in the Authorization header of every request.  


## Required headers
- Authorization: `<YOUR_API_KEY>`
- Content-type: application/json


## A sample postman request
Below is a sample Postman request to generate invoice data with AI.
```
POST/https://api-v2-sandbox.chimoney.io/v0.2/ai/invoice/generate
Host: https://api-v2-sandbox.chimoney.io
Authorization: <YOUR_API_KEY>
Content-Type: application/json

{
  "instruction": "Create an invoice from Jane Doe to Chimoney Incorporated for Web Dev Service which I provided for 4 months at $5/month and for Project Management cost of $100 with tax rate of 5%."
}
```

:::tip  
To test endpoints, you can do that in the documentation or import the postman collection by doing these:
- Go to [get postman collection](https://documenter.getpostman.com/view/26097715/2sA3kXCzD2) page.
- Click ```Run in Postman``` button at the top right corner of the page.
:::



