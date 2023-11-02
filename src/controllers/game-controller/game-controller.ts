import getRandomInt from '../../helpers/get-randomint/get-randomint';
export class Controller {
  colors = ['red', 'green', 'yellow', 'blue'];
  activeCoords: number[] = [];
  cellSize = 50;
  emptyField = -1;
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
  setActiveBall(x: number, y: number) {
    if (this.activeCoords.length == 0) {
      this.activeCoords.push(x, y);
    }
    if (this.activeCoords.length == 2) {
      this.activeCoords[0] = x;
      this.activeCoords[1] = y;
    }
  }
  isFieldEmpty(x: number, y: number): boolean {
    return this.board[x][y] === this.emptyField ? true : false;
  }
  setBallColored(x: number, y: number, color: number) {
    this.board[x][y] = color;
  }
  getActiveBall() {
    return this.activeCoords;
  }
  getBoard() {
    return this.board;
  }
  getEmptyField() {
    return this.emptyField;
  }
  getColors() {
    return this.colors;
  }
  getCellSize() {
    return this.cellSize;
  }
  isGameEnded() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] == -1) return false;
      }
    }
    return true;
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
