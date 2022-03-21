import React from 'react';
import './App.css';
  const SlotM =(props)=>{
    // let x = '😄';
    // let y = '😄';
    // let z = '💁‍♂️';
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
     let {x, y, z} = props;
     if((props.x === props.y) && (props.y === props.z))
     {
       return(
         <>
           <h2>{x} {y} {z}</h2>
           <h2>This is Matching</h2>
         </>
       )
     }else{
      return(
        <>
          <h2>{x} {y} {z}</h2>
          <h2>This is Not Matching</h2>
        </>
      )
     }
}
const App =()=>{
   
  return(
    <>
      <h2 className="heading">🎰 Welcome to Slot mchine game 🎰</h2>
      <div className="slot-header">
        <div className="slot-machine">
             <SlotM  x ="😄" y ="😄" z ="😄"/>
             <hr/>
             <SlotM  x ="🥭" y ="🍌" z = "🍎" />
             <hr/>
             <SlotM  x ="👩‍🔬" y ="👩‍🔬" z ="👩‍🔬"  />
             <hr/>
             <SlotM  x ="👩" y ="🐫" z ="👩"  />
        </div>

      </div>
      
      
    </>
  )
}
export default App;