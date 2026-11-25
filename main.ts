// SPDX-License-Identifier: MIT
// Fridge Roast: One Line, Biggest Laugh
// Writes one smart-fridge roast line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My fridge texted me that its door was open — I was standing in the kitchen, holding the door, reading the text.";

const outPath = "/output/entry.txt";

// The gate requires 1-200 characters; refuse to ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters, must be 1-200.`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Entry line must be one line with no extra whitespace.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
