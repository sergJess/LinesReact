import React from 'react';
import style from './cell.module.css';
type TChessCell = {
  color: string;
};
export default function Cell(props: TChessCell) {
  return <div className={style.cell} style={{ color: `${props.color}` }} />;
}
