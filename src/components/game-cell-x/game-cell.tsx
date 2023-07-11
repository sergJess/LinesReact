import React from 'react';
import style from './game-cell.module.css';

function GameCell({ width, height }: { width: number; height: number }) {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };
  return <div className={style.gameCell} style={styles}></div>;
}
export default GameCell;
