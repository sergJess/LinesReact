import React, { useRef } from 'react';
import style from './ball.module.css';

export const ballColors = ['#449900', '#fcba03', '#0339fc', '#ca03fc', '#fc0303'];
export default function Ball({ color, size }: { color: string; size: number }) {
  const ballRef = useRef<HTMLDivElement>(null);
  const ballStyle = {
    backgroundColor: `${color}`,
    width: `${size}px`,
    height: `${size}px`,
  };
  const clickToBall = () => {
    const ball = ballRef.current!;
    ball.classList.toggle(`${style.ball_animation_active}`);
  };

  return <div style={ballStyle} onClick={clickToBall} ref={ballRef} className={style.ball}></div>;
}
