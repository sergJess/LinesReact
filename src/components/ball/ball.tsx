import React from 'react';
import './ball.css';
type Tball = {
  color: string;
  width: number;
  height: number;
};
type TballState = {
  isClicked: boolean;
  animationClass: string;
};
export class Ball extends React.Component<Tball, TballState> {
  constructor(props: Tball) {
    super(props);
    this.clickToBall = this.clickToBall.bind(this);
    this.state = {
      isClicked: false,
      animationClass: 'ball-animation_inactive',
    };
  }
  clickToBall() {
    if (this.state.isClicked) {
      this.setState({
        animationClass: 'ball-animation_inactive',
        isClicked: false,
      });
    } else {
      this.setState({ isClicked: true, animationClass: 'ball-animation_active' });
    }
  }
  render() {
    const ballStyle = {
      backgroundColor: `${this.props.color}`,
      width: `${this.props.width}`,
      height: `${this.props.height}`,
    };
    return (
      <div
        style={ballStyle}
        onClick={this.clickToBall}
        className={`ball ${this.state.animationClass}`}
      ></div>
    );
  }
}
