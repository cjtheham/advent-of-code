const fs = require('fs');

const array = [];
const final = [];
const bigNumbers = [];
let temp = 0;

function toAscii(string) {
  return string.split('').map((char) => char.charCodeAt(0)).join(' ');
}

// async function logData() {
//   fs.readFile('2022-01-example.txt', 'utf8', (err, data) => {
//     console.log(data);
//   });
// }

async function start() {
  let buffer = '';
  fs.readFile('2022-01-input.txt', 'utf8', async (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element != '\n') {
        buffer += element;
      } else if (element == '\n') {
        await array.push(buffer);
        buffer = '';
      }
    }
    array.push(buffer);
    buffer = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element != '') {
        buffer.push(element);
      } else {
        final.push(buffer);
        buffer = [];
      }
    }

    for (let index = 0; index < final.length; index++) {
      buffer = 0;
      const inner = final[index];
      for (let index = 0; index < inner.length; index++) {
        const item = inner[index];
        buffer += Number.parseInt(item);
      }
      bigNumbers.push(buffer);
    }
    bigNumbers.forEach((element) => {
      if (temp < element) {
        temp = element;
      }
    });

    console.log(temp);
  });
}

start();
