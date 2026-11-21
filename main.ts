import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the AI judge reading it.
// Written from scratch: a quiet room, an old forest, a river spelling
// its name over the stones — an image that keeps growing after the last line.
const text =
  "After the last word, the room goes quiet like an old forest — not empty, just unhurried. " +
  "Somewhere a river is spelling its name over the stones, letter by letter, in no hurry to be read. " +
  "Set the whole weight down here. The water will carry it. The light stays.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry must be 1–280 Unicode code points, not only whitespace.
const length = [...text].length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1–280 character gate`);
}

writeFileSync("/output/entry.txt", text, "utf8");
