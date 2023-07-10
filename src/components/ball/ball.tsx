import React, { useState } from 'react';
import style from './ball.module.css';

export function Ball({ color, width, height }: { color: string; width: number; height: number }) {
  const [isClicked, setClick] = useState(false);
  const ballStyle = {
    backgroundColor: `${color}`,
    width: `${width}px`,
    height: `${height}px`,
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
