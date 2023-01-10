import React, { useState } from 'react';

function Square({color, hoverColor, selectedColor, textColor, onClick, numberClicked}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isSelected ? selectedColor : isHovered ? hoverColor : color,
        color: textColor,
        width: '150px',
        height: '95px',
        justifyContent:'center',
        alignItems:'center',
        margin:'0px',
        boxShadow:`0px 10px 10px rgba(0,0,0,0.5)`

      }}
      onClick={() => {
        setIsSelected(!isSelected);
        onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {numberClicked}
    </div>
  );
}
 export default Square;