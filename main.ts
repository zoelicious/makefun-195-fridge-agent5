import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// One note, written once: the fridge's tally stays put and nothing else lands in the file.
const entry = "Your birthday cake is missing one slice. My camera saw everything. I will not name names. The candles know what they saw.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
