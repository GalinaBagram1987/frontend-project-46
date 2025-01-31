import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getBaseDir = () => {
  const baseDir = path.resolve(__dirname, '..');
  return baseDir;
};

export const getPath = (filePath) => {
  const baseDir = getBaseDir();
  const absolutePath = path.resolve(baseDir, filePath);
  return absolutePath;
};

export const readFile = (filePath) => fs.readFileSync(getPath(filePath), 'utf-8');

export const getExtension = (filePath) => extname(filePath);
