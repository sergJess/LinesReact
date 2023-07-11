import React, { useState } from 'react';
import style from './ball.module.css';

function Ball({ color, size }: { color: string; size: number }) {
  const [isClicked, setClick] = useState(false);
  const ballStyle = {
    backgroundColor: `${color}`,
    width: `${size}px`,
    height: `${size}px`,
  };
  const clickToBall = () => {
    setClick(!isClicked);
  };

  return (
    <div
      style={ballStyle}
      onClick={clickToBall}
      className={isClicked ? `${style.ball} ${style.ball_animation_active}` : `${style.ball}`}
    ></div>
  );
}

export default Ball;
