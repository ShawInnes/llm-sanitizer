import { describe, it, expect } from 'vitest'
import { sanitiseInputText } from './SanitiseInputText'

describe('sanitiseInputText', () => {
  it('should tokenize email addresses', () => {
    const input = 'Contact john.doe@example.com for more info'
    const result = sanitiseInputText(input)
    expect(result.sanitizedText).toContain('[EMAIL_TOKEN_1]')
    expect(result.mappings[0].originalValue).toBe('john.doe@example.com')
  })

  it('should tokenize SSNs', () => {
    const input = 'SSN: 123-45-6789'
    const result = sanitiseInputText(input)
    expect(result.sanitizedText).toContain('[SSN_TOKEN_1]')
    expect(result.mappings[0].originalValue).toBe('123-45-6789')
  })

  it('should tokenize Australian ABNs', () => {
    const input = 'ABN: 51 824 753 556'
    const result = sanitiseInputText(input)
    expect(result.sanitizedText).toContain('[ABN_TOKEN_1]')
    expect(result.mappings[0].originalValue).toBe('51 824 753 556')
  })

  it('should tokenize Australian TFNs', () => {
    const input = 'TFN: 123 456 789'
    const result = sanitiseInputText(input)
    expect(result.sanitizedText).toContain('[TFN_TOKEN_1]')
    expect(result.mappings[0].originalValue).toBe('123 456 789')
  })

  it('should tokenize phone numbers', () => {
    const input = 'Call +1 (555) 123-4567'
    const result = sanitiseInputText(input)
    expect(result.sanitizedText).toContain('[PHONE_TOKEN_1]')
    expect(result.mappings[0].originalValue).toBe('+1 (555) 123-4567')
  })

  it('should handle multiple sensitive data types in one text', () => {
    const input = 'Contact john@example.com or call 555-123-4567. ABN: 51 824 753 556'
    const result = sanitiseInputText(input)
    expect(result.mappings).toHaveLength(3)
    expect(result.sanitizedText).toContain('[EMAIL_TOKEN_1]')
    expect(result.sanitizedText).toContain('[PHONE_TOKEN_1]')
    expect(result.sanitizedText).toContain('[ABN_TOKEN_1]')
  })

  it('should return original text when no sensitive data is found', () => {
    const input = 'This is a regular text with no sensitive data'
    const result = sanitiseInputText(input)
    expect(result.sanitizedText).toBe(input)
    expect(result.mappings).toHaveLength(0)
  })
})
