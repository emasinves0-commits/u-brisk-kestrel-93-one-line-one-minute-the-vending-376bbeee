import { mkdirSync, writeFileSync } from "node:fs";

// Mechanism: the "out of order" sign is what a broken vending machine shows;
// the jammed B7 coil ("won't turn") is the actual fault. The machine turns the
// fault into the flirtation: it is not broken, it is stuck on you.
const LINE = "Out of order? No, I'm just stuck on you—B7 won't turn.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function validateEntry(line: string): string {
  if (line !== line.trim()) {
    throw new Error("line has leading/trailing whitespace");
  }
  if (line.length !== 54) {
    throw new Error(`unexpected line length: ${line.length}`);
  }
  if (!line.includes("B7")) {
    throw new Error("line must contain B7");
  }
  if (!line.includes("—")) {
    throw new Error("line must contain the em-dash");
  }
  return line;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, validateEntry(LINE), "utf8");
