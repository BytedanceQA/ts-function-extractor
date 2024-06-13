import * as ts from 'typescript';

// 提取TS代码仓库中的所有函数
// export function extractFunctions(codeRepository: string): string[] {
//   const ast = parseCode(codeRepository);
//   const functions: string[] = [];
//   ast.forEachChild(node => {
//     if (ts.isFunctionDeclaration(node) && node.name) {
//       functions.push(node.name.text);
//     }
//   });

//   return functions;
// }

// 提取TS代码仓库中的所有函数
export function extractFunctions(codeRepository: string): {name: string, comments: string[], startLine: number, endLine: number}[] {
  const sourceFile = ts.createSourceFile('temp.ts', codeRepository, ts.ScriptTarget.Latest, true);
  const functions: {name: string, comments: string[], startLine: number, endLine: number}[] = [];

  function visit(node: ts.Node) {
    if (ts.isFunctionDeclaration(node) && node.name) {
      const { line: startLine } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
      const { line: endLine } = sourceFile.getLineAndCharacterOfPosition(node.getEnd());
      const comments = ts.getLeadingCommentRanges(codeRepository, node.pos) || [];
      const commentTexts = comments.map(comment => codeRepository.substring(comment.pos, comment.end));
      functions.push({name: node.name.text, comments: commentTexts, startLine, endLine});
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return functions;
}