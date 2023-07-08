import React from 'react';
import { GameField } from '../components/game-field/game-field';
import { Ball } from '../components/ball/ball';

function App() {
  return (
    <div>
      <GameField cellWidth={110} cellHeight={110} size={8} />
      <Ball color="#666889" width={50} height={50} />
    </div>
  );
}
export default App;
