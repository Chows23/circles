import React, { Component } from 'react';
import Circle from './Circle'

class CirclesList extends Component {
  state = {
    circles: [
      {
        number: 33,
        color: 'blue',
      },
    ]
  }

  addCircle = () => {
    console.log('add');
    this.setState((prevState) => {
      return {
        circles: [...prevState.circles, { number: this.randomNumber(), color: this.randomColor() }]
      }
    })
  };

  handleRemoveCircle = (circleIndex) => {
    console.log('remove click', circleIndex);
    this.setState(prevState => {
      return { circles: prevState.circles.filter((_, index) => index !== circleIndex) }
    })
  }

  randomColor() {
    return (
      'rgb(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ')'
    );
  };

  randomNumber() {
    return Math.floor(Math.random() * 100)
  };

  render() {
    return (
      <>
        <button onClick={this.addCircle}>new circle</button>
        <ul>
          {this.state.circles.map((circle, index) => (
            <li key={index}>
              <Circle
                onClick={this.handleRemoveCircle}
                color={circle.color}
                number={circle.number}
                id={index}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CirclesList;