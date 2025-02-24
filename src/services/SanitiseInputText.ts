import {TokenMapping} from "./TokenMapping.ts";

export function sanitiseInputText(inputText: string) {
    const newMappings: TokenMapping[] = []
    let processedText = inputText

    // Email addresses
    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g
    const emails = inputText.match(emailRegex) || []
    emails.forEach((email, index) => {
        const token = `[EMAIL_TOKEN_${index + 1}]`
        processedText = processedText.replace(email, token)
        newMappings.push({originalValue: email, tokenizedValue: token})
    })

    // US Social Security Numbers (XXX-XX-XXXX)
    const ssnRegex = /\b\d{3}-\d{2}-\d{4}\b/g
    const ssns = processedText.match(ssnRegex) || []
    ssns.forEach((ssn, index) => {
        const token = `[SSN_TOKEN_${index + 1}]`
        processedText = processedText.replace(ssn, token)
        newMappings.push({originalValue: ssn, tokenizedValue: token})
    })

    // Australian Business Number (11 digits)
    const abnRegex = /\b\d{2}\s?\d{3}\s?\d{3}\s?\d{3}\b/g
    const abns = processedText.match(abnRegex) || []
    abns.forEach((abn, index) => {
        const token = `[ABN_TOKEN_${index + 1}]`
        processedText = processedText.replace(abn, token)
        newMappings.push({originalValue: abn, tokenizedValue: token})
    })

    // Australian Tax File Number (8 or 9 digits)
    const tfnRegex = /\b\d{3}\s?\d{3}\s?\d{3}\b|\b\d{3}\s?\d{3}\s?\d{2}\b/g
    const tfns = processedText.match(tfnRegex) || []
    tfns.forEach((tfn, index) => {
        const token = `[TFN_TOKEN_${index + 1}]`
        processedText = processedText.replace(tfn, token)
        newMappings.push({originalValue: tfn, tokenizedValue: token})
    })

    // Phone Numbers (various formats)
    const phoneRegex = /(\+\d{1,3}\s*)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g
    const phones = processedText.match(phoneRegex) || []
    phones.forEach((phone, index) => {
        const token = `[PHONE_TOKEN_${index + 1}]`
        processedText = processedText.replace(phone, token)
        newMappings.push({originalValue: phone, tokenizedValue: token})
    })
    return {mappings: newMappings, sanitizedText: processedText};
}