import * as csv from 'fast-csv';
import { createWriteStream } from 'fs';
import * as fs from 'fs';
import * as path from 'path';

export function writeFunctionsToCSV(allFunctions: any[]) {
  const csvStream = csv.format({ headers: true });
  const writableStream = createWriteStream('allFunctions.csv');

  writableStream.on('finish', () => console.log('Done writing to CSV'));

  csvStream.pipe(writableStream).on('end', () => process.exit());

  allFunctions.forEach(func => csvStream.write(func));

  csvStream.end();
}

export function getFiles(dirPath: string): string[] {
    let files = fs.readdirSync(dirPath);
    let allFiles: string[] = [];
    files.forEach(file => {
      let filePath = path.join(dirPath, file);
      let stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        allFiles = allFiles.concat(getFiles(filePath));
      } else if (stat.isFile() && path.extname(filePath) === '.ts') {
        allFiles.push(filePath);
      }
    });
    return allFiles;
  }