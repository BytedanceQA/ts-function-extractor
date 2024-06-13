import { extractFunctions } from './extractor';
import fs from 'fs';
import {writeFunctionsToCSV,getFiles} from './util'
import type  { FunctionDetail } from './type'

const codeRepositoryPath = '/Users/bytedance/test_repo/git/jest';

let allFunctions: FunctionDetail[] = [];

getFiles(codeRepositoryPath).forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  allFunctions = allFunctions.concat(extractFunctions(code));
});

console.log('Extracted functions:', allFunctions);

writeFunctionsToCSV(allFunctions);


