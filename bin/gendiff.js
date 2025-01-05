#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .command("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .action(() => {
    console.log("Compares two configuration...");
  });
program.version("0.0.1");
program.parse();
