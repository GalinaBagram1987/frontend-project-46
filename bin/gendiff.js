#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .command("gendiff <filepath1> <filepath2>")
  .description("Compares two configuration files and shows a difference.")
  .action(() => {
    console.log("Compares two configuration...");
  });
program.option("-f, --format [type]", "output format");
program.version("0.0.1");
program.parse();
