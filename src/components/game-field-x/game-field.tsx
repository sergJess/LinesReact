import React from 'react';
import style from './game-field.module.css';
import GameCell from 'components/game-cell-x/game-cell';
import Ball from '../ball/ball';
import placeStartBalls from '../../controllers/place-start-balls/place-start-balls';

function GameField({ size, cellSize }: { size: number; cellSize: number }) {
  const gameFieldStyle = {
    display: 'grid',
    placeContent: 'center center',
    gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
  };
  const ramdomArray = placeStartBalls(5, size ** 2 - 1);
  const cells = [];
  for (let i = 0; i < size ** 2; i++) {
    if (ramdomArray.includes(i)) {
      cells.push(
        <GameCell key={`cell-${i}`} width={cellSize} height={cellSize}>
          <Ball color="#449900" size={50} />
        </GameCell>
      );
    } else {
      cells.push(<GameCell key={`cell-${i}`} width={cellSize} height={cellSize} />);
    }
  }

  return <div style={gameFieldStyle}>{cells}</div>;
}
export default GameField;
