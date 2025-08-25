---
title: POST/Invoice
---

# AI Invoice Data Generator
The AI Invoice Data Generator generates invoice data based on clear prompts in the request body. 

## Request Components
> **Request Body:**  

This parameter is **required** and it should contain a clear instruction to generate an invoice.  

Example:
```
{
  "instruction": "Create an invoice from Jane Doe to Chimoney Incorporated for Web Dev Service which I provided for 4 months at $5/month and for Project Management cost of $100 with tax rate of 5%."
}
```

> **Required Header:**   

Authorization: (YOUR_API_KEY)

****
## Example JSON response
In the JSON response below, the status is successful and it displays an invoice showing important details such as invoice number & date, sender, recipient, and others. 
```
{
    "status": "success",
    "data": {
        "json": {
            "logo": "",
            "userId": "",
            "invoiceNumber": "invoice_2025_123_web_project",
            "invoiceDate": "8/24/2025",
            "date": "8/24/2025",
            "due": "8/24/2025",
            "dueDate": "8/24/2025",
            "subtotal": "520",
            "paid": false,
            "isPaid": false,
            "comment": "",
            "sender": {
                "companyName": "",
                "firstName": "Jane",
                "lastName": "Doe",
                "country": "",
                "addressLine1": "",
                "addressLine2": "",
                "state": "",
                "city": "",
                "phone": "",
                "email": ""
            },
            "recipient": {
                "companyName": "Chimoney Incorporated",
                "firstName": "",
                "addressLine1": "Web Dev Service",
                "addressLine2": "",
                "city": "",
                "state": "",
                "country": "",
                "postalCode": "",
                "phone": "",
                "email": ""
            },
            "taxRate": "5%",
            "terms": "",
            "notes": "",
            "footerMessages": "Please pay invoice before due Date",
            "paymentInfo": {
                "accountName": "",
                "accountNumber": "",
                "bankAccount": "",
                "chimoney": {
                    "paymentLink": ""
                },
                "crypto": {
                    "walletAddress": "",
                    "token": "",
                    "blockchain": ""
                }
            },
            "items": [
                {
                    "invoiceItemId": "",
                    "itemId": "",
                    "taxable": true,
                    "amount": 520,
                    "currency": "",
                    "description": "Web Dev Service for 4 months at $5/month, Project Management cost $100",
                    "quantity": "",
                    "tags": "",
                    "rate": ""
                }
            ]
        },
        "downloadURL": "",
        "chimoneyPaymentRequestCreateURL": "",
        "chimoneyAPIEndpoint": ""
    }
}

```

## Some common errors

1. Absence of or wrong API key  
**Error: 401 (Unauthorized)**
```
{
    "error": "key not valid. Generate a new one from the developer portal"
}
```

Endpoint path and method (e.g., GET /users)  
Clear description of what it does  
Request parameters or request body (list in table format if needed)  
Example JSON response (formatted and explained)  
Notes on common errors, edge cases, or limitations  
