import React, { useRef } from 'react';
import style from './game-cell.module.css';

function GameCell({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const cellRef = useRef<HTMLDivElement>(null);
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };
  const clickToCell = () => {
    const cell = cellRef.current!;
    // console.log(cell.getClientRects()[0]);
  };
  return (
    <div onClick={clickToCell} className={style.gameCell} style={styles} ref={cellRef}>
      {children}
    </div>
  );
}
export default GameCell;
