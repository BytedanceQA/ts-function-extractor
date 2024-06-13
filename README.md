# my-ts-function-extractor

This project is a TypeScript code repository function extractor. It provides a utility function to extract all the functions from a TypeScript code repository.

## Project Structure

```
my-ts-function-extractor
├── src
│   ├── extractor.ts
│   ├── parser.ts
│   └── index.ts
├── tests
│   └── extractor.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

To install the project dependencies, run the following command:

```
npm install
```

## Usage

To extract all the functions from a TypeScript code repository, you can use the `extractFunctions` function provided in the `src/extractor.ts` file. Here's an example:

```typescript
import { extractFunctions } from './src/extractor';

// TypeScript code repository
const codeRepository = `
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}
`;

// Extract functions
const functions = extractFunctions(codeRepository);

console.log(functions);
// Output: ['add', 'subtract']
```

## Testing

To run the unit tests for the `extractFunctions` function, you can use the following command:

```
npm test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.