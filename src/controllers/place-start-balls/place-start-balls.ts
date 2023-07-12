export default function placeStartBalls(ballNumber: number, endIndex: number) {
  const startIndex = 0;
  const ballIndexes: Array<number> = [];
  let ballCounter = ballNumber;
  while (ballCounter > 0) {
    let randomNumber = getRandomIntInclusive(startIndex, endIndex);
    while (ballIndexes.includes(randomNumber)) {
      randomNumber = getRandomIntInclusive(startIndex, endIndex);
    }
    ballIndexes.push(randomNumber);
    ballCounter--;
  }
  return ballIndexes;
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
