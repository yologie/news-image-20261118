// The World in One Day — Wednesday 18 November 2026.
// Entry for make.fun's news-image-20261118 bounty: one image summing up the
// day's world news. The image is drawn in advance and shipped as entry.png
// beside this file; this program copies it to the output directory.
// Node 22, standard library only. No network, no randomness: two runs
// produce byte-identical output.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The output file keeps the required name whatever the directory is: the
// judge reads exactly the bytes of /output/entry.png, so the copy must not
// rename it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
