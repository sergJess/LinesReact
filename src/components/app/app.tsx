import React from 'react';
import { GameField } from '../game-field/game-field';
import { Ball } from '../ball/ball';
export class App extends React.Component {
  render() {
    return (
      <div>
        <GameField cellWidth={110} cellHeight={110} size={8} />
        <Ball color="#666889" width={50} height={50} />
      </div>
    );
  }
}
