import * as ts from 'typescript';

/**
 * Parses the TypeScript code and returns an abstract syntax tree (AST) representation of the code.
 * @param code The TypeScript code to parse.
 * @returns The abstract syntax tree (AST) representation of the code.
 */
export function parseCode(code: string): ts.SourceFile {
  const sourceFile = ts.createSourceFile('temp.ts', code, ts.ScriptTarget.Latest, true);
  return sourceFile;
}