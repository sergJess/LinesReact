import React from 'react';
import GameField from 'components/game-field-x/game-field';
import Ball from '../components/ball/ball';

function App() {
  return (
    <>
      <GameField size={8} cellSize={100} />
      <Ball color="#449900" size={50} />
    </>
  );
}
export default App;
