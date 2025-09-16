---
title: POST/payment/verify
---

# Verify a payment
Use this to verify the status of a payment by using its issueID. 


### Endpoint
/payment/verify

### **Authentication details:**   

Authorization: Bearer YOUR_API_KEY

---
## Request parameters

**HTTP Method:** POST
### **Body parameters:**  
| Field                 | 	Type	   	    |  Description    |
| -------               | --------------    | --------------- |
| ```ID```	            | string, required	        | The transaction ID (issueID)  |
| ```Subaccoun```	    | string, optional	        | The subaccount  |


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

## Error handling

1. **400 Bad request** - Bad request
```
{
    "status": "error",
    "type": "Validation Error",
    "code": "INVALID_REQUEST",
    "message": "\"issueID\" is required"
}
```

2. **401 Unauthorized** - Invalid API key
```
{
    "error": "key not valid. Generate a new one from the developer portal"
}
```

3. **403 Forbidden** - Access to this request is forbidden  
```
{
    "error": "sender must be a valid Chimoney user ID"
}
```

4. **404 Not Found** - Resource not found
```
{
    "error": "issueID or subaccount not valid. Check again"
}
```

5. **500 Internal Server Error** - Unexpected error occurred
```
"error": "internal_server_error"
```
---
