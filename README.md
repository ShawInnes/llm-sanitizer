# Input Text Sanitization Service

A TypeScript service that sanitizes sensitive information in text by tokenizing various data types including:

- Email addresses
- Social Security Numbers (SSN)
- Australian Business Numbers (ABN)
- Australian Tax File Numbers (TFN)
- Phone numbers

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Testing

Run the test suite:

```bash
npm test
```

View test coverage:

```bash
npm run coverage
```

## Development

The project uses:

- Vite for fast development and building
- TypeScript for type safety
- Vitest for testing
- React for UI components

## Key Features

- Detects and tokenizes multiple sensitive data types in a single text input
- Maintains mappings of original values to tokens
- Returns original text when no sensitive data is found
- Handles various formats of phone numbers, emails, and identification numbers

## Example Usage

```typescript
import {sanitiseInputText} from './services/SanitiseInputText'

const input = 'Contact john@example.com or call 555-123-4567'
const result = sanitiseInputText(input)
// Result: 'Contact [EMAIL_TOKEN_1] or call [PHONE_TOKEN_1]'
```

## Next Steps

- Add support for more sensitive data types
- Consider utilising: https://github.com/microsoft/presidio
- LiteLLM integration: https://microsoft.github.io/presidio/samples/docker/litellm/
- nlp.js for Named Entity Recognition (NER)