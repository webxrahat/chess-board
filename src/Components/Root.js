import './Root.css'
import React, {useState, useEffect} from 'react'

const Root = () => {
    const [multiple, setMultiple] = useState(0);
    const [chess, setChess] = useState([]);
    const [newColor, setNewColor] = useState(false)

   const handle = ()=>{
    setNewColor(!newColor)
    // console.log(newColor);
   }

    
    // const black = {
    //     width:"50px",
    //     height:"50px",
    //     backgroundColor:'black'
    //   }
    //   const white = {
    //     width:"50px",
    //     height:"50px",
    //     backgroundColor:'white',
    //   }
    const green = {
        width:"50px",
        height:"50px",
        backgroundColor:'green'
      }
      const yellow = {
        width:"50px",
        height:"50px",
        backgroundColor:'yellow',
      }
      const box = {
        width:50*multiple,
        display:'flex',
        flexWrap:'wrap',
        marginTop:"20px",
        boxShadow:`0px 10px 10px rgba(0,0,0,0.5)`
      }


      const Board = ()=>{
        let arr = [];
    
        for (let i=0;i<multiple;i++){
          let poll = [];
          for (let k=0;k<multiple;k++){
            if ((i+k)%2 === 0)
              poll.push(<div style={yellow}></div>);
            else  
              poll.push(<div style={green}></div>)

          }
        //   if(newColor){
        //     poll.push(<div style={white}></div>);
        //   }else{
        //     poll.push(<div style={black}></div>);
        //   }
          arr.push(poll);
        }
    
        setChess(arr);
      }

    //   makeChessBoard()

    useEffect(()=>{
        Board()
    })

      return (
        <div className='chess'>
          
          <div>
            <h2 className='font-semibold text-xl'>
              <span className='text-success'>N x N </span> 
              ChessBoard
            </h2>
            <input type="number" onChange={(e)=> setMultiple(e.target.value)} placeholder="Choose your Number" className="input input-bordered input-success w-full max-w-xs" />
          </div>
          <button className='btn btn-primary' onClick={handle}>Refresh</button>
          <section style={box}>
            {chess}
          </section>
    
        </div>
      )
    }
 
export default Root;