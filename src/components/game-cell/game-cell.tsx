import React from 'react';
import './game-cell.css';
type TgameCell = {
  coordX: number;
  coordY: number;
  width: number;
  height: number;
  callback: (x: number, y: number) => void;
};
type TgameCellState = { coordX: number; coordY: number };
export class GameCell extends React.Component<TgameCell, TgameCellState> {
  constructor(props: TgameCell) {
    super(props);
    this.clickToCell = this.clickToCell.bind(this);
    this.state = {
      coordX: this.props.coordX,
      coordY: this.props.coordY,
    };
  }
  clickToCell(): void {
    this.props.callback(this.state.coordX, this.state.coordY);
  }
  render() {
    const cellSizeStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
    };
    return <div style={cellSizeStyle} onClick={this.clickToCell} className="game-cell"></div>;
  }
}
