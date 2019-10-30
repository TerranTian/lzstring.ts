#! /usr/bin/env node

import { LZString } from "./LZString";

let path = require("path");
let fs = require("fs");
let dir = path.dirname(process.argv[1]);
let action = process.argv[2];
let parameters = process.argv.splice(3);

if (process.argv.length < 4) {
  console.error(`
  Usage: lz-string action <input_file>
  action:
    decompressFromBase64
    compressToUTF16
    decompressFromUTF16
    compressToUint8Array
    decompressFromUint8Array
    compressToEncodedURIComponent
    decompressFromEncodedURIComponent
    compress
    decompress
  `);
  process.exit(1);
}

let content = fs.readFileSync(parameters[0], {encoding: 'utf8'})
console.log(LZString[action](content));