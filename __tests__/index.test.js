import fs from 'fs';
import genDiff from '../src/index.js';
import { getPath, readFile } from '../src/utilits.js';

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
  const checkPath = (filePath1, filePath2) => {
    if (!fs.existsSync(filePath1) || !fs.existsSync(filePath2)) {
      throw new Error('Error, Invalid file path');
    }
  };
  expect(() => checkPath('path/to/nonexistent/file1', 'path/to/nonexistent/file2')).toThrow('Error, Invalid file path');
});

test('genDiff, stylish for Json', () => {
  const filePath1 = getPath('__fixtures__/file1.json');
  const filePath2 = getPath('__fixtures__/file2.json');
  const expected = readFile('__fixtures__/stylishOneBase.txt').trim();
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expected);
});

test('genDiff, stylish for Yml', () => {
  const filePath1 = getPath('__fixtures__/filepath1.yml');
  const filePath2 = getPath('__fixtures__/filepath2.yml');
  const expected = readFile('__fixtures__/stylishOneBase.txt').trim();
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expected);
});

test('genDiff, plain for Json', () => {
  const filePath1 = getPath('__fixtures__/file1.json');
  const filePath2 = getPath('__fixtures__/file2.json');
  const expected = readFile('__fixtures__/plainTwo.txt').trim();
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expected);
});

test('genDiff, plain for Yml', () => {
  const filePath1 = getPath('__fixtures__/filepath1.yml');
  const filePath2 = getPath('__fixtures__/filepath2.yml');
  const expected = readFile('__fixtures__/plainTwo.txt').trim();
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expected);
});

test('genDiff, json for Json', () => {
  const filePath1 = getPath('__fixtures__/file1.json');
  const filePath2 = getPath('__fixtures__/file2.json');
  const expected = readFile('__fixtures__/jsonThree.txt').trim();
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expected);
});

test('genDiff, json for Yml', () => {
  const filePath1 = getPath('__fixtures__/filepath1.yml');
  const filePath2 = getPath('__fixtures__/filepath2.yml');
  const expected = readFile('__fixtures__/jsonThree.txt').trim();
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expected);
});
