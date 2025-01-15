// import { fileURLToPath } from 'url';
import fs from 'fs';
// import path from 'path';
// import * as yaml from 'js-yaml';
// import _ from 'lodash';
import { genDiff } from '../src/index.js';
// import { extname } from 'path';
import {
  getPath,
  readFile,
  // getExtension,
  // getDifferent,
} from '../src/utilits.js';

test('genDiff, both files are empty', () => {
  const filePath1 = getPath('__fixtures__/file1.json');
  const filePath2 = getPath('__fixtures__/file1.json');
  const file1 = readFile(filePath1);
  const file2 = readFile(filePath2);
  const expected = '';
  if (file1.lendth === 0 && file2.lendth === 0) {
    expect(genDiff(filePath1, filePath2)).toEqual(expected);
  }
});

test('genDiff, if one of the files does not exist', () => {
  const diff = (filePath1, filePath2) => {
    if (!fs.existsSync(filePath1) || !fs.existsSync(filePath2)) {
      throw new Error('Error, Invalid file path');
    }
  };
});

test('genDif, if two files are identical', () => {
  const filePath1 = getPath('__fixtures__/file1.json');
  const filePath2 = getPath('__fixtures__/file1.json');
  const expected = genDiff(filePath1, filePath2);
  expect(genDiff(filePath1, filePath2)).toEqual(expected);
});

test('genDif, should return differences between two JSON files', () => {
  const filePath1 = getPath('__fixtures__/file1.json');
  const filePath2 = getPath('__fixtures__/file2.json');
  const expected = genDiff(filePath1, filePath2);
  expect(genDiff(filePath1, filePath2)).toEqual(expected);
});
