import React, { useRef, useEffect } from 'react';
import gameController, { Controller } from '../../controllers/game-controller/game-controller';
import drawBoard from '../drawBoard/draw-board';
import findCellCenter from '../../helpers/find-cell-center/findCellCenter';
import Ball from '../ball/ball';
import redrawCell from 'ui/redraw-cell/redraw-cell';
type TBoard = {
  size: number;
};
type TCanvasClick = {
  context: CanvasRenderingContext2D;
  cellSize: number;
  controller: Controller;
  cellX: number;
  cellY: number;
};
export default function Board(props: TBoard) {
  const cellSize = gameController.getCellSize();
  const boardSize = props.size * cellSize;
  const board = useRef<HTMLCanvasElement>(null);
  const colors = gameController.getColors();
  gameController.setInitialBalls();
  const clickCanvas = (event: React.MouseEvent) => {
    const canvas = event.target as HTMLCanvasElement;
    const context = board.current!.getContext('2d');
    if (canvas && context) {
      const canvasX = Math.abs(Math.floor(canvas.getBoundingClientRect().left) - event.clientX);
      const canvasY = Math.abs(Math.floor(canvas.getBoundingClientRect().top) - event.clientY);
      const coords = findCellCenter(cellSize, canvasX, canvasY);
      const xCoord = Math.trunc(coords[0] / cellSize);
      const yCoord = Math.trunc(coords[1] / cellSize);
      gameController.setActiveBall(xCoord, yCoord);
      console.log(gameController.getBoard()[xCoord][yCoord]);
      userClick({
        context: context,
        cellSize: cellSize,
        controller: gameController,
        cellX: xCoord,
        cellY: yCoord,
      });
      //   Ball({ x: coords[0], y: coords[1], size: cellSize, color: 'red', context: context });
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

function userClick(objClick: TCanvasClick) {
  let isClicked = false;
  let anim = 0;
  if (!objClick.controller.isFieldEmpty(objClick.cellX, objClick.cellY)) {
    isClicked = !isClicked;
    redrawCell({
      color: 'white',
      cellX: objClick.cellX,
      cellY: objClick.cellY,
      cellSize: objClick.cellSize,
      context: objClick.context,
    });
    const coords = findCellCenter(
      objClick.cellSize,
      objClick.cellX * objClick.cellSize,
      objClick.cellY * objClick.cellSize
    );
    const colors = objClick.controller.getColors();
    const board = objClick.controller.getBoard();
    let stepIndex = 0;
    function step() {
      const yNum = coords[1];
      if (coords[1] > yNum) {
        stepIndex++;
        console.log(yNum);
        Ball({
          x: coords[0],
          y: coords[1] + stepIndex,
          size: objClick.cellSize,
          color: colors[board[objClick.cellX][objClick.cellY]],
          context: objClick.context,
        });
      } else {
        console.log(stepIndex);
        stepIndex--;
        Ball({
          x: coords[0],
          y: coords[1] - stepIndex,
          size: objClick.cellSize,
          color: colors[board[objClick.cellX][objClick.cellY]],
          context: objClick.context,
        });
      }
    }
    anim = window.requestAnimationFrame(step);
    if (stepIndex < -300 || stepIndex > 300) {
      window.cancelAnimationFrame(anim);
    }
  }
}
