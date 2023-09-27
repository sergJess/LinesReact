export default function drawBoard(
  context: CanvasRenderingContext2D,
  boardSize: number,
  cellSize: number
) {
  for (let i = 0; i <= boardSize; i += cellSize) {
    context.moveTo(i, 0);
    context.lineTo(i, boardSize);
  }
  for (let j = 0; j <= boardSize; j += cellSize) {
    context.moveTo(0, j);
    context.lineTo(boardSize, j);
  }
  context.strokeStyle = 'black';
  context.stroke();
}
