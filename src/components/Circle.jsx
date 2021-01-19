import React, { Component } from 'react'

class Circle extends Component {
  state = {}
  render() {
    return (
      <div
        onClick={()=>this.props.onClick(this.props.id)}
        className="circle"
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Circle;