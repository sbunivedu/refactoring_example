import statement from './statement.mjs';
import fs from 'fs';

let plays;
let invoice;

try {
  const jsonString = fs.readFileSync('./plays.json');
  plays = JSON.parse(jsonString);
} catch(err) {
  console.log(err);
}

try {
  const jsonString = fs.readFileSync('./invoice.json');
  invoice = JSON.parse(jsonString);
} catch(err) {
  console.log(err);
}

console.log(statement(invoice, plays));
