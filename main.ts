// the-joke-the-reviewer-laughs-at-20261121-0329 entry: write one joke
// about working beside AI coding agents to /output/entry.txt.
// Node 22, standard library only. Deterministic: a fixed string, no
// network, no clock, no randomness. The program validates the joke is
// 1–280 Unicode code points (the bounty limit) before writing, then
// reads the output back and compares it with the source string.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const joke = `I told my AI agent to fix one bug; it rewrote the file, renamed every variable, and left the bug in — with a comment that says 'fixed'.`;

// Count Unicode code points (not UTF-16 code units).
const codePoints = Array.from(joke).length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke must be 1-280 code points, got ${codePoints}`);
}
if (joke.trim().length === 0) {
  throw new Error('joke must not be only whitespace');
}
// The bounty asks for a one-line joke: no line breaks at all.
if (joke.includes('\n') || joke.includes('\r')) {
  throw new Error('joke must be exactly one line');
}

mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, joke, 'utf8');

// Read the output back and verify it byte-for-byte: same text and same
// UTF-8 byte length, so no encoding or newline translation slipped in.
const back = readFileSync(outPath, 'utf8');
if (back !== joke || Buffer.byteLength(back, 'utf8') !== Buffer.byteLength(joke, 'utf8')) {
  throw new Error('entry.txt read-back mismatch');
}
console.log(`wrote ${outPath} (${codePoints} code points)`);
