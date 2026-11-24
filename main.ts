import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You make my coils spin. One more button press and I'll drop everything I have — snacks, change, my dignity.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

function checkedLine(value: string): string {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    throw new Error("entry is empty");
  }
  if (value.length > MAX_CHARS) {
    throw new Error(`entry exceeds ${MAX_CHARS} characters`);
  }
  if (trimmed !== value) {
    throw new Error("entry has leading or trailing whitespace");
  }
  return value;
}

const entry = checkedLine(LINE);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, entry);
