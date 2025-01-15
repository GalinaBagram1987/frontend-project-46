#!/usr/bin/env node

import { Command } from 'commander';
// import { fileURLToPath } from 'url';
// import fs from 'fs';
// import path from 'path';
import { genDiff } from '../src/index.js';
// import {
// getPath,
// readFile,
// getExtension,
// getDifferent,
// } from '../src/utilits.js';
// import getParseData from '../src/parser.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('0.0.1')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
