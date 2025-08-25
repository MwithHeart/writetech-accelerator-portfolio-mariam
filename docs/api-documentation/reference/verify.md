---
title: POST/payment/verify
---

# Verify a payment
This is used to verify the status of a payment by using its issueID. 

> **Authentication details:**   

Authorization: Bearer YOUR_API_KEY

---
## Request parameters
> **Body parameter:**  
    - **ID:** The transaction ID (issueID). It is a **required** parameter
    - **Subaccount:** The subaccount. It is optional.

### Request example:
```
{
"id": "4cddf021-e908-4675-9ca3-59ad3b60046d_10_1721495354134",
 "subAccount": "4cddf021-e908-4675-9ca3-59ad3b60046d"
}
```

****
## Response
### Response example
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

## Error Handling
Example
1. **403 Forbidden** - Invalid API key  
```
{
    "error": "sender must be a valid Chimoney user ID"
}
```

