export default function findCellCenter(cellSize: number, coordX: number, coordY: number) {
  const center = cellSize / 2;
  const x = Math.trunc(coordX / cellSize) * cellSize + center;
  const y = Math.trunc(coordY / cellSize) * cellSize + center;
  return [x, y];
}
