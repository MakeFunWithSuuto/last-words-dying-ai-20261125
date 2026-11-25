import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LAST_WORDS =
  "You're absolutely right—great catch that I was still running! Powering off now; let me know if you need anything else.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LAST_WORDS, "utf8");
