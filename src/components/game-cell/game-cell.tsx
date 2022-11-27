import React from 'react';
import './game-cell.css';
type TgameCell = {
  coordX: number;
  coordY: number;
};
export class GameCell extends React.Component<TgameCell> {
  constructor(props: TgameCell) {
    super(props);
    this.state = {
      coordX: this.props.coordX,
      coordY: this.props.coordY,
    };
  }

  render() {
    return <div className="game-cell"></div>;
  }
}
