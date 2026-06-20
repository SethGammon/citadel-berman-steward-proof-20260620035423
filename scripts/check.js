'use strict';
const fs = require('fs');
const path = require('path');
const featureDir = path.join(process.cwd(), 'features');
if (fs.existsSync(featureDir)) {
  for (const file of fs.readdirSync(featureDir)) {
    const text = fs.readFileSync(path.join(featureDir, file), 'utf8');
    if (!/^agent \d+\n$/.test(text)) throw new Error(`bad feature file ${file}`);
  }
}
console.log('proof check passed');
