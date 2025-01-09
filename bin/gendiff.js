#!/usr/bin/env node

import { Command } from "commander";
import { readFile } from "../src/utilits.js";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .option("-f, --format [type]", "output format")
  .argument("<filepath1>")
  .argument("<filepath2>")
  .version("0.0.1")
  .action((filepath1, filepath2, option) => {
    const content1 = readFile(filepath1);
    const content2 = readFile(filepath2);
    console.log(content1, content2);
  });

program.parse();
