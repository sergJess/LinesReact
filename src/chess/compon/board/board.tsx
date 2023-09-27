import React, { useRef, useEffect } from 'react';
import gameController from '../../../chess/controller/controller';
type TBoard = {
  size: number;
};
export default function Board(props: TBoard) {
  const cellSize = 50;
  const boardSize = props.size * cellSize;
  const board = useRef<HTMLCanvasElement>(null);
  const colors = gameController.getColors();
  gameController.setInitialBalls();
  console.log(colors);
  // gameController.getBoard().map((item, indexRaw) => {
  //   item.map((cell, indexColumn) => {
  //     const context = board.current!.getContext('2d');
  //     if (cell >= 0 && cell < colors.length && context) {
  //       const coords = findCellCenter(cellSize, indexRaw * cellSize, indexColumn * cellSize);

  //       Ball({
  //         x: coords[0],
  //         y: coords[1],
  //         size: cellSize,
  //         color: colors[cell],
  //         context: context,
  //       });
  //     }
  //   });
  // });
  const clickCanvas = (event: React.MouseEvent) => {
    const canvas = event.target as HTMLCanvasElement;
    const context = board.current!.getContext('2d');
    if (canvas && context) {
      const canvasX = Math.abs(Math.floor(canvas.getBoundingClientRect().left) - event.clientX);
      const canvasY = Math.abs(Math.floor(canvas.getBoundingClientRect().top) - event.clientY);
      const coords = findCellCenter(cellSize, canvasX, canvasY);
      Ball({ x: coords[0], y: coords[1], size: cellSize, color: 'red', context: context });
    }
  };
  useEffect(() => {
    const context = board.current!.getContext('2d');
    if (context) {
      drawBoard(context, boardSize, cellSize);
    }
  }, [board, boardSize, props.size]);

  return <canvas width={boardSize} onClick={clickCanvas} height={boardSize} ref={board}></canvas>;
}

function Ball({
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

function findCellCenter(cellSize: number, coordX: number, coordY: number) {
  const center = cellSize / 2;
  const x = Math.trunc(coordX / cellSize) * cellSize + center;
  const y = Math.trunc(coordY / cellSize) * cellSize + center;
  return [x, y];
}

function drawBoard(context: CanvasRenderingContext2D, boardSize: number, cellSize: number) {
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
