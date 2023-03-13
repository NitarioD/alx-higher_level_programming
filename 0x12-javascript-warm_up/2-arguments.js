#!/usr/bin/node

const argvLength = process.argv.length;

if (argvLength > 1) {
  console.log('Arguments found');
} else if (argvLength === 1) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
