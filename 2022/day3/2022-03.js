/* eslint-disable no-console */
const fs = require('fs');

let buffer = '';
let rucksacks = [];
let arrayBuffer = [];
let compartments = [];
var points = 0;

// Part 1 - Success!

async function part1() {
  fs.readFile('/Users/cj/code/advent-of-code/2022/day3/2022-03-input.txt', 'utf-8', (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element != '\n') {
        buffer += element;
      } else {
        rucksacks.push(buffer);
        buffer = '';
      }
    }
    rucksacks.push(buffer);
    rucksacks.forEach((element) => {
      const halfwayPoint = element.length / 2;
      arrayBuffer.push(element.slice(0, halfwayPoint));
      arrayBuffer.push(element.slice(halfwayPoint));
      compartments.push(arrayBuffer);
      arrayBuffer = [];
    });
    for (let index = 0; index < compartments.length; index++) {
      const element = compartments[index];
      for (let index = 0; index < element[0].length; index++) {
        const item = element[0][index];
        if (element[1].includes(item)) {
          if(item == item.toLowerCase()) {
            points += item.charCodeAt(0) - 96;
            console.log(item.charCodeAt(0) - 96);
          } else {
            points += (item.toLowerCase().charCodeAt(0) - 96) + 26;
            console.log((item.toLowerCase().charCodeAt(0) - 96) + 26);
          }
          index = element[0].length;
        }
      }
    }
    console.log(points);
  });
}

// eslint-disable-next-line prefer-const
let part2data = [];
let part2stringBuffer = '';
let isnt3 = [];
let sections = [];
let part2pts = 0;

async function part2() {
  fs.readFile('/Users/cj/code/advent-of-code/2022/day3/2022-03-input.txt', 'utf-8', (err, data) => {
    for (let index = 0; index < (data.length); index++) {
      const element = data[index];
      if (element !== '\n') {
        part2stringBuffer += element;
      } else {
        part2data.push(part2stringBuffer);
        part2stringBuffer = '';
      }
    }
    part2data.push(part2stringBuffer);
    for (let index = 1; index < part2data.length + 1; index++) {
      const element = part2data[index - 1];
      if ((index % 3) !== 0) {
        isnt3.push(element);
      } else {
        isnt3.push(element);
        sections.push(isnt3);
        isnt3 = [];
      }
    }
    for (let index = 0; index < sections.length; index++) {
      const element = sections[index][0];
      for (let aaa = 0; aaa < element.length; aaa++) {
        const letter = element[aaa];
        if (sections[index][1].includes(letter)) {
          if (sections[index][2].includes(letter)) {
            if (letter === letter.toLowerCase()) {
              part2pts += letter.charCodeAt(0) - 96;
              console.log(letter.charCodeAt(0) - 96);
            } else {
              part2pts += (letter.toLowerCase().charCodeAt(0) - 96) + 26;
              console.log((letter.toLowerCase().charCodeAt(0) - 96) + 26);
            }
            aaa = element.length;
          }
        }
      }
    }
    console.log(part2pts);
  });
}

part2();
