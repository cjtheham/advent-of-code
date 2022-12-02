/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fs = require('fs');

let buffer = '';
let moves = [];
let turns = [];

let points = 0;

async function part1() {
  fs.readFile('/Users/cj/code/advent-of-code/2022/day2/2022-02-input.txt', 'utf-8', (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element !== '\n') {
        buffer += element;
      } else {
        moves.push(buffer);
        buffer = '';
      }
    }
    moves.push(buffer);
    moves.forEach((element) => {
      const letters = element.split(' ');
      turns.push(letters);
    });
    turns.forEach((element) => {
      // Paper beats rock

      if (element[1] === 'Y' && element[0] === 'A') {
        points += 6;
      } else if (element[1] === 'X' && element[0] === 'B') {
        points += 0;
      }

      // Rock beats scissors

      if (element[1] === 'X' && element[0] === 'C') {
        points += 6;
      } else if (element[1] === 'Z' && element[0] === 'A') {
        points += 0;
      }

      // Scissors beats paper

      if (element[1] === 'Z' && element[0] === 'B') {
        points += 6;
      } else if (element[1] === 'Y' && element[0] === 'C') {
        points += 0;
      }

      // Paper Tie

      if (element[1] === 'X' && element[0] === 'A') {
        points += 3;
      }
      // Rock Tie

      if (element[1] === 'Y' && element[0] === 'B') {
        points += 3;
      }

      // Scissors Tie

      if (element[1] === 'Z' && element[0] === 'C') {
        points += 3;
      }

      // Points for element chosen
      switch (element[1]) {
        case 'X':
          points += 1;
          break;

        case 'Y':
          points += 2;
          break;

        case 'Z':
          points += 3;
          break;

        default:
          break;
      }
    });

    console.log(`Total Points: ${points}`);
  });
}

async function part2() {
  moves = [];
  buffer = '';
  turns = [];
  points = 0;
  fs.readFile('/Users/cj/code/advent-of-code/2022/day2/2022-02-input.txt', 'utf-8', (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element !== '\n') {
        buffer += element;
      } else {
        moves.push(buffer);
        buffer = '';
      }
    }
    moves.push(buffer);
    moves.forEach((element) => {
      const letters = element.split(' ');
      turns.push(letters);
    });
    turns.forEach((element) => {
      switch (element[1]) {
        // lose
        case 'X':
          switch (element[0]) {
            case 'A':
              points += 3;
              break;

            case 'B':
              points += 1;
              break;

            case 'C':
              points += 2;
              break;

            default:
              break;
          }
          break;

        // draw
        case 'Y':
          switch (element[0]) {
            case 'A':
              points += 4;
              break;

            case 'B':
              points += 5;
              break;

            case 'C':
              points += 6;
              break;

            default:
              break;
          }

          break;

        // win
        case 'Z':
          switch (element[0]) {
            case 'A':
              points += 8;
              break;

            case 'B':
              points += 9;
              break;

            case 'C':
              points += 7;
              break;

            default:
              break;
          }
          break;

        default:
          break;
      }
    });
    console.log(points);
  });
}
part2();
