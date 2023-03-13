#!/usr/bin/node

const argvLength = process.agrv.length;

if (argvLength > 1) {
  console.log('Arguments found');
} else if (argvLength === 1) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
console.log(process.argv);
