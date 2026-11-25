import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words at 1 Percent — make.fun entry.
// Dual output: the program reads entry.txt, writes its EXACT bytes to
// /output/entry.txt (the competition's required output path), and prints
// the entry text to stdout. Writing the raw file content (untrimmed) keeps
// /output/entry.txt byte-identical to entry.txt; stdout prints the trimmed
// text so the console line has no stray blank line.
// Run with: node main.ts  (Node 22+ strips types natively)
const raw = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", raw, "utf8");
} catch {
  // A write failure must never crash the run; stdout still carries the entry.
}
console.log(raw.trim());
