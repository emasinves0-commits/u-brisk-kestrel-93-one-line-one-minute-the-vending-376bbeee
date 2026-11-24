import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You make my coils spin. One more button press and I'll drop everything I have — snacks, change, my dignity.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function validate(line: string): string {
  if (line !== line.trim()) {
    throw new Error("line has leading/trailing whitespace");
  }
  if (line.length !== 107) {
    throw new Error(`unexpected line length: ${line.length}`);
  }
  return line;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, validate(LINE), "utf8");
