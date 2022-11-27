import React from 'react';
import { resolvePath } from 'react-router-dom';
import { GameCell } from '../game-cell/game-cell';
import './game-field.css';
type TgameField = {
  size: number;
};
type TgameFieldCoords = {};
export class GameField extends React.Component<TgameField> {
  private size: number;
  private cellsArray: Array<JSX.Element>;
  private coordsArray: Array<number>;
  constructor(props: TgameField) {
    super(props);
    this.size = props.size;
    this.cellsArray = this.generateCells(this.size);
    this.coordsArray = [];
  }
  generateCells(size: number): Array<JSX.Element> {
    const cellsArray = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        cellsArray.push(<GameCell coordX={i} coordY={j} />);
        this.coordsArray.push;
      }
    }
    return cellsArray;
  }
  render() {
    const gameFieldStyle = {
      display: 'grid',
      gridTemplateColumns: `${this.size}`,
    };
    return (
      <div className="game-field" style={gameFieldStyle}>
        {this.cellsArray.map((item, index) => {
          <GameCell key={index.toString()} />;
          return item;
        })}
      </div>
    );
  }
}
