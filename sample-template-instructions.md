# Sample Template Instructions for DocuFlow

## How to Create Word Templates

To use DocuFlow effectively, you need to create Word (.docx) templates with placeholders. Here's how:

### 1. Create a Word Document
- Open Microsoft Word or any compatible word processor
- Create your document with the desired formatting

### 2. Add Placeholders
Use the following format for placeholders:
- `{{name}}` - For name fields
- `{{date}}` - For date fields  
- `{{address}}` - For address fields
- `{{company}}` - For company fields
- `{{position}}` - For job position fields
- `{{email}}` - For email fields

### 3. Example Template Content

```
CONTRACT AGREEMENT

This agreement is made between:

Name: {{name}}
Date: {{date}}
Address: {{address}}
Company: {{company}}
Position: {{position}}
Email: {{email}}

Terms and conditions:
1. The parties agree to...
2. Payment terms are...
3. This agreement is valid until...

Signed by: {{name}}
Date: {{date}}
```

### 4. Save as .docx
- Save your document as a .docx file
- Make sure to use the .docx format (not .doc)

### 5. Upload to DocuFlow
- Go to the demo page at `/demo`
- Upload your template
- Fill in the placeholder values
- Generate your document

## Tips for Good Templates

1. **Use clear placeholder names**: Make them descriptive and easy to understand
2. **Keep formatting simple**: Complex formatting might not transfer perfectly
3. **Test your template**: Try it with different values to ensure it works
4. **Use consistent naming**: Stick to a naming convention for your placeholders

## Common Placeholder Examples

- `{{fullName}}` - Full name
- `{{firstName}}` - First name only
- `{{lastName}}` - Last name only
- `{{phone}}` - Phone number
- `{{website}}` - Website URL
- `{{amount}}` - Monetary amount
- `{{description}}` - Long text description
- `{{signature}}` - Signature line

## Troubleshooting

- **Placeholders not replaced**: Make sure you're using the exact format `{{placeholderName}}`
- **File not uploading**: Ensure the file is a .docx format
- **Formatting issues**: Try simplifying complex formatting in your template 