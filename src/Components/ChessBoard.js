import Square from './Square';
import React, { useEffect, useState } from 'react';

function ChessBoard() {
  const [squaresClicked, setSquaresClicked] = useState(Array(64).fill(0));
  const [colorPair, setColorPair] = useState(Math.random() > 0.5 ? 'black-white' : 'green-yellow');

  const handleClick = (index) => {
    const newSquaresClicked = [...squaresClicked];
    newSquaresClicked[index]++;
    setSquaresClicked(newSquaresClicked);
  };

  useEffect(() => {
    setColorPair(Math.random() > 0.5 ? 'black-white' : 'green-yellow');
  }, [colorPair]);

  const generateSquares = () => {
    let squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(
        <Square
          key={i}
          color={colorPair === 'black-white' ? (i + Math.floor(i / 8)) % 2 === 0 ? 'black' : 'white' : (i + Math.floor(i / 8)) % 2 === 0 ? 'green' : 'yellow'}
        
        // style={{
        //   backgroundColor: colorPair === 'black-white' ? (i + Math.floor(i / 8)) % 2 === 0 ? 'black' : 'white' : (i + Math.floor(i / 8)) % 2 === 0 ? 'green' : 'yellow',
        // }}
        


          hoverColor={'gray'}
          selectedColor={'cream'}
          textColor={'blue'}
          numberClicked={squaresClicked[i]}
          onClick={() => handleClick(i)}
        />
      );
    }
    return squares;
  }

  return (
    <div style={{display: 'grid',border:'black', alignItems:'center', justifyItems:'center', gap:'0px', gridTemplateColumns: 'repeat(8, 1fr)', margin: '30px'}}>
      {generateSquares()}
    </div>
  );
}

export default ChessBoard;

