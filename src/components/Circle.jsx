import React from 'react'

const Circle = ({ onClick, number, color, id }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="circle"
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
}

export default Circle;