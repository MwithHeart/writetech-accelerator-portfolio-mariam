---
title: Getting Started
# sidebar_position: 1
toc_min_heading: 2
toc_max_heading: 6
---
# Getting started
👋🏽 Welcome to the Chimoney API, the API that allows you to make payouts seamlessly.


## Create an account
Create an account and learn how to use the Chimoney API.

### Businesses Integrating with the API: 
1. Create an account **for businesses** at [dash.chimoney.io](https://dash.chimoney.io).
1. In the collapsible menu, below the list, click **Developers**.
1. Choose **Create an app**.
1. You get an API key once you name your app. Ensure you keep it safe.

:::note  
You can also book a demo or email **support@chimoney.io** to request **"Verification and API Access"**. Ensure you include links to your website and some details about your use case. 
:::


### Developers testing the API 
1. Create an account **for individuals** at the [sandbox environment](https://Sandbox.Chimoney.io).
:::note
Account is funded with $1000 of test amount
:::

2. Download the app.
3. Click the Organizations tab on the dashboard.
4. Create an Organization/Team
4. Click  the Developers tab to create an app and use the API keys to access the sandbox endpoints.

- You can watch [this video](https://www.loom.com/share/436303eb69c44f0d9757ea0c655bed89?sid=b6a0f661-721c-4731-9873-ae6f2d25780) on how to get started with the Chimoney Sandbox.

## The base URLs
1. Production URL: ```https://api.chimoney.io```

2. Sandbox testing URL: ```https://api-v2-sandbox.chimoney.io```

## Authentication process
The Chimoney API uses an API Key for authentication, which can be obtained from the [Chimoney developer dashboard](https://dash.chimoney.io/developers).

Copy your API-KEY from the Developers tab and paste it into ```Authorization``` under ```Headers```.


## Required headers
- Authorization: (YOUR_API_KEY)  
- Content-Type: application/json


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



