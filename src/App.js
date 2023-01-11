

import React, { useState } from 'react';
import ChessBoard from './Components/ChessBoard';
// import Root from './Components/Root';

function App() {
  // const [size, setSize] = useState(8);
  // const [colorPair, setColorPair] = useState(Math.random() > 0.5 ? 'black-white' : 'green-yellow');
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  function handleReload (){
    setColor(getRandomColor());
  }


  return (
    <div style={{ backgroundColor: color, paddingTop:'20px', paddingBottom:'20px'}}>
      <button className='btn btn-primary block mx-auto' onClick={handleReload}>Refresh</button>
      <ChessBoard/>
      {/* <Root/> */}
      {/* <ChessBoard size={8} /> */}

    </div>
  );
}

export default App;
