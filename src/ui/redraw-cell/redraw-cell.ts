type TRedrawCell = {
  context: CanvasRenderingContext2D;
  cellX: number;
  cellY: number;
  cellSize: number;
  color: string;
};
export default function redrawCell(data: TRedrawCell) {
  data.context.clearRect(
    (data.cellX + 0.5) * data.cellSize - Math.floor(data.cellSize / 2) + 1,
    (data.cellY + 0.5) * data.cellSize - Math.floor(data.cellSize / 2) + 1,
    data.cellSize - 4,
    data.cellSize - 4
  );
  data.context.fillStyle = data.color;
  data.context.fillRect(
    (data.cellX + 0.5) * data.cellSize - Math.floor(data.cellSize / 2) + 1,
    (data.cellY + 0.5) * data.cellSize - Math.floor(data.cellSize / 2) + 1,
    data.cellSize - 4,
    data.cellSize - 4
  );
}
