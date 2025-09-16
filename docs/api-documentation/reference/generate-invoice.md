---
title: Generate invoice with AI
---

# Generate invoice with AI
Generates invoice data based on clear prompts in the request body. 

### Endpoint
/invoice/generate

### **Authentication details:**   
Authorization: Bearer YOUR_API_KEY

---

## Request parameters
> **Body parameter:**  

This parameter is **required** and it should contain a clear instruction to generate an invoice.  
**Data Type:**  
```instruction``` → string, required

### Request example:
```
{
  "instruction": "Create an invoice from Jane Doe to Chimoney Incorporated for Web Dev Service which I provided for 4 months at $5/month and for Project Management cost of $100 with tax rate of 5%."
}
```


****

## Code sample

**HTTP Method:** POST

A code sample in curl:
```
curl -X POST https://api.example.com/invoice/generate \
-H "Authorization: Bearer YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{"instruction": "Create an invoice from Jane Doe to Chimoney Incorporated for Web Dev Service which I provided for 4 months at $5/month and for Project Management cost of $100 with tax rate of 5%"}'

```

## Response

### Response schema

| Field                 | 	Type	   	    |  Description    |
| -------               | --------------    | --------------- |
| ```invoiceNumber```	| string	        | Unique identifier for invoice   |
| ```dueDate```         | date	      	    | The due date for the invoice  |
| ```items```           | array             | List of invoice line items    |

### Response example 
In the JSON response below, the status is successful (Code 200) and it displays an invoice showing important details such as invoice number & date, sender, recipient, and others. 
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
    "message": "\"instruction\" is required"
}
```

2. **401 Unauthorized** - Invalid API key
```
{
    "error": "key not valid. Generate a new one from the developer portal"
}
```

3. **403 Forbidden**  - Access to this request is forbidden
```
{
    "error": "sender must be a valid Chimoney user ID"
}
```

4. **500 Internal Server Error** - Unexpected error occurred
```
"error": "internal_server_error"
```
---