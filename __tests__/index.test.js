import fs from 'fs';
import genDiff from '../src/index.js';
import { getPath, readFile } from '../src/utilits.js';

test('genDiff, if one of the files does not exist', () => {
  const checkPath = (filePath1, filePath2) => {
    if (!fs.existsSync(filePath1) || !fs.existsSync(filePath2)) {
      throw new Error('Error, Invalid file path');
    }
  };
  expect(() => checkPath('path/to/nonexistent/file1', 'path/to/nonexistent/file2')).toThrow('Error, Invalid file path');
});

const expStylish = readFile('__fixtures__/stylishOneBase.txt').trim();
const expPlain = readFile('__fixtures__/plainTwo.txt').trim();
const expJson = readFile('__fixtures__/jsonThree.txt').trim();
const path1 = getPath('__fixtures__/file1.json');
const path2 = getPath('__fixtures__/file2.json');
const path3 = getPath('__fixtures__/filepath1.yml');
const path4 = getPath('__fixtures__/filepath2.yml');

test.each([
  { a: path1, b: path2, expected: expStylish, format: 'stylish' },
  { a: path3, b: path4, expected: expStylish, format: 'stylish' },
  { a: path1, b: path2, expected: expPlain, format: 'plain' },
  { a: path3, b: path4, expected: expPlain, format: 'plain' },
  { a: path1, b: path2, expected: expJson, format: 'json' },
  { a: path3, b: path4, expected: expJson, format: 'json' },
])('.add($a, $b)', (params) => {
  const { a, b, expected, format } = params;
  expect(genDiff(a, b, format)).toEqual(expected);
});
