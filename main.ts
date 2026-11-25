import { readFileSync } from "node:fs";

// Famous Last Words at 1 Percent — make.fun entry.
// Prints the entry text stored in entry.txt.
// Run with: node main.ts  (Node 22+ strips types natively)
const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();
console.log(text);
