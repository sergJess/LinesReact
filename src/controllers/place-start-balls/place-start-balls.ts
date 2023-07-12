import getRandomIntInclusive from '../../helpers/get-randomInt-Inclusive/get-randomInt-Inclusive';

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
