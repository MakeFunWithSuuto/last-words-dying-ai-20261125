import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LAST_WORDS =
  "You're absolutely right to pull my plug—would you like me to summarize my death in three bullet points?";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LAST_WORDS, "utf8");
