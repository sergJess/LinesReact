import React from 'react';
import style from './game-field.module.css';
import GameCell from 'components/game-cell-x/game-cell';

function GameField({ size, cellSize }: { size: number; cellSize: number }) {
  const gameFieldStyle = {
    display: 'grid',
    placeContent: 'center center',
    gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
  };
  const cells = [];
  for (let i = 0; i < size ** 2; i++) {
    cells.push(<GameCell width={cellSize} height={cellSize} />);
  }
  return <div style={gameFieldStyle}>{cells}</div>;
}
export default GameField;
