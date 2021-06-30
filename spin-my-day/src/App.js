import { useEffect, useState } from "react";
import './App.css';

function App() {
 // make a state to represent the current angle
 const [angle, setAngle] = useState(0);
 // make a state to represent how many spins the circle has had
 const [spins, setSpins] = useState(1);
 
 // make a useEffect that says any time the angle changes, we increase the spins by one
 useEffect(() => {
   setSpins((curr) => curr + 1);
 }, [angle]); 

 const spin = () => {
   // gets a random number from 0-5 and multiplies it by 60 (to create our new angle)
   const newAngle = Math.floor(Math.random() * 6) * 60;
   // create a variable momentum which is 1440 (four full spins) times the amount of times we've spun so far, so we go forward no matter what
   const momentum = 1440 * spins;
   // set our angle state to our new angle + our momentum
   setAngle(newAngle + momentum);
 }

  return (
    <div className="App">
      <h1>What's My Day Like!!</h1>
        <div className="wheel" >
          <div id="options" className="options" style={{ transform: `rotate(${angle}deg)` }}>    
            <div className="sections">
              <span className="selection1"><b>Do A Workout</b></span>
              <span className="selection2"><b>Write a Blog</b></span>
              <span className="selection3"><b>Try A Recipe</b></span>
              <span className="selection4"><b>Enjoy Your Rest Day</b></span>
              <span className="selection5"><b>Bummer!</b></span>
              <span className="selection6"><b>Read A Book</b></span>
              <span className="selection7"><b>Go Shopping</b></span>
              <span className="selection8"><b>Bummer!</b></span>
              </div>
          </div>
        </div>
      <button className="spin" onClick={spin}>Spin it!</button>
    </div>
  );
}

export default App;




