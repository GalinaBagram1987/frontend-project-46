#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format (default: "stylish")')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('0.0.1')
  .action((filepath1, filepath2, option) => {
    const result = genDiff(filepath1, filepath2, option.format);
    console.log(result);
  });

program.parse();
