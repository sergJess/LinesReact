import React, { useRef, useEffect } from 'react';
import gameController from '../../controllers/game-controller/game-controller';
import drawBoard from '../drawBoard/draw-board';
import findCellCenter from '../../helpers/find-cell-center/findCellCenter';
import Ball from '../ball/ball';
type TBoard = {
  size: number;
};
export default function Board(props: TBoard) {
  const cellSize = 50;
  const boardSize = props.size * cellSize;
  const board = useRef<HTMLCanvasElement>(null);
  const colors = gameController.getColors();
  gameController.setInitialBalls();
  console.log(gameController.getBoard());
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
      gameController.getBoard().map((item, indexRaw) => {
        item.map((cell, indexColumn) => {
          if (cell >= 0 && cell < colors.length) {
            const coords = findCellCenter(cellSize, indexRaw * cellSize, indexColumn * cellSize);
            Ball({
              x: coords[0],
              y: coords[1],
              size: cellSize,
              color: colors[cell],
              context: context,
            });
          }
        });
      });
    }
  }, [board, boardSize, colors, props.size]);

  return <canvas width={boardSize} onClick={clickCanvas} height={boardSize} ref={board}></canvas>;
}
