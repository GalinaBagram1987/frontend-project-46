#!/usr/bin/env node

import { program } from "commander";

program
  .name("gendiff")
  .version("1.0.0")
  .description("Compares two configuration files and show
  .option("-v, --version", "output the version number")
  .option("-h, --help", "output usage information");

program.action(() => {
  const options = program.opts(); // Получаем все установ
  if (option.help) {
    console.log(`gendiff -h

            Usage: gendiff [options]
          
            Compares two configuration files and shows a 
          
            Options:
              -V, --version        output the version num
              -h, --help           output usage informati
  }
  if (option.version) {
    console.log(`version('1.0.0')`);
  }
});
program.parse(process.argv);
