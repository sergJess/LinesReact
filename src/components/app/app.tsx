import React from 'react';
import { GameField } from '../game-field/game-field';
export class App extends React.Component {
  render() {
    return (
      <div>
        <GameField cellWidth={110} cellHeight={110} size={8} />
      </div>
    );
  }
}
