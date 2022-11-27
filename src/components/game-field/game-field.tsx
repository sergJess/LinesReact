import React from 'react';
import { resolvePath } from 'react-router-dom';
import { GameCell } from '../game-cell/game-cell';
import './game-field.css';
type TgameField = {
  size: number;
};
type TgameFieldCoords = {
  coordX: number;
  coordY: number;
};
export class GameField extends React.Component<TgameField> {
  private size: number;
  private cellsArray: Array<TgameFieldCoords>;
  constructor(props: TgameField) {
    super(props);
    this.size = props.size;
    this.cellsArray = this.generateCells(this.size);
  }
  generateCells(size: number): Array<TgameFieldCoords> {
    const cellsArray = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cell = { coordX: i, coordY: j };
        cellsArray.push(cell);
      }
    }
    return cellsArray;
  }
  render() {
    const gameFieldStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${this.size})`,
    };
    return (
      <div className="game-field" style={gameFieldStyle}>
        {this.cellsArray.map((item, index) => {
          return <GameCell key={index.toString()} coordX={item.coordX} coordY={item.coordY} />;
        })}
      </div>
    );
  }
}
