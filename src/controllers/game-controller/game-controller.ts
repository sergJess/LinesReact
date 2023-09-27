import getRandomInt from '../../helpers/get-randomint/get-randomint';
class Controller {
  colors = ['red', 'green', 'yellow', 'blue'];
  board = [
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
  ];
  boardLength = this.board.length;
  isFieldEmpty(x: number, y: number): boolean {
    return this.board[x][y] === -1 ? true : false;
  }
  setBallColored(x: number, y: number, color: number) {
    this.board[x][y] = color;
  }
  getBoard() {
    return this.board;
  }
  getColors() {
    return this.colors;
  }
  setInitialBalls() {
    let initialBalls = 5;
    while (initialBalls > 0) {
      const x = getRandomInt(0, this.boardLength - 1);
      const y = getRandomInt(0, this.boardLength - 1);
      if (this.isFieldEmpty(x, y)) {
        const color = getRandomInt(0, this.colors.length);
        this.setBallColored(x, y, color);
        initialBalls--;
      }
    }
  }
}
const gameController = new Controller();
export default gameController;
