export default function Ball({
  x,
  y,
  size,
  color,
  context,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
  context: CanvasRenderingContext2D;
}) {
  context.moveTo(x, y);
  context.beginPath();
  context.arc(x, y, size / 2.6, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  // setTimeout(() => {
  //   context.clearRect(
  //     x - Math.floor(size / 2) + 1,
  //     y - Math.floor(size / 2) + 1,
  //     size - 4,
  //     size - 4
  //   );
  // }, 1000);
}
