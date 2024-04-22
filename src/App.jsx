import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  // const [canvas1, setCanvas] = useState(canvas);
  const [isDragging, setIsDragging] = useState(false);
  const [eraser, setEraser] = useState(false);
  const [lineWidth, setLineWidth] = useState(4);
  const [color, setColor] = useState("black");
  const contextRef = useRef(null);
  const canvasRef = useRef(null);
  const sliderRef = useRef(null);
  const colorRef = useRef(null);
  const buttonRef = useRef(null);
  const eraseRef = useRef(null);
  const canvas = null;
  var sliderVal = 0;

  

  useEffect(() => { 

  const HandleMouseDown = event => {
      setIsDragging(true);
      console.log("Mouse is moving over the canvas");
      context.beginPath();
      context.moveTo(event.offsetX, event.offsetY);
  };

  const HandleMouseMove = event => {
      if(isDragging && !eraser){
        console.log("We should be dragging and drawing");
        // context.fillRect(event.offsetX, event.offsetY, 3,3);
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke(); 
    } else if(isDragging && eraser) {
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.lineTo(event.offsetX, event.offsetY);
      context.stroke();
        console.log("Mouse is moving over the canvas, but we erase");
    }
  };

  const HandleMouseUp = event => {
    // alert("made it to mouse up");
    setIsDragging(false);
  };

  const  HandleButtonClick = event => {
    context.clearRect(0,0,canvas.width,canvas.height);
  };

  const  HandleEraseClick = event => {
    if(eraser == true) {
      setEraser(false);
      setColor(picker.value);
    } else {
      setEraser(true);
      setColor("white");
    }
    
  };

  const  HandleSlider = event => {
    setLineWidth(slider.value);
    // alert(lineWidth);
  };

  const  HandleColor = event => {
    setColor(picker.value);
  };

  const button = buttonRef.current;
  button.addEventListener("click", HandleButtonClick);

  buttonRef.current = button;

  const eraseButton = eraseRef.current;
  eraseButton.addEventListener("click", HandleEraseClick);
  eraseRef.current = eraseButton;

  const canvas = canvasRef.current;

  canvas.addEventListener("mousedown", HandleMouseDown);

  canvas.addEventListener("mousemove", HandleMouseMove);

  canvas.addEventListener("mouseup", HandleMouseUp);
  
  canvasRef.current = canvas; 
  
  const context = canvas.getContext("2d");

  context.lineWidth = lineWidth;
  context.strokeStyle = color;

  const slider = sliderRef.current
  slider.addEventListener("change", HandleSlider);

  const picker = colorRef.current;
  picker.addEventListener("change", HandleColor);

  return () => {
    canvas.removeEventListener("mousedown", HandleMouseDown);
    canvas.removeEventListener("mousemove",HandleMouseMove);
    canvas.removeEventListener("mouseup", HandleMouseUp);
    button.removeEventListener("click", HandleButtonClick);
    eraseButton.removeEventListener("click", HandleEraseClick);
    slider.removeEventListener("change", HandleSlider);
    picker.removeEventListener("change", HandleColor);
  }

  },[isDragging, lineWidth, color]);

  

//Functions
//Functions
//Functions
//Functions
//Functions

  return (
    <>
      <div id="main-div">
      <h1 id="title"> Paint </h1>
      <h1 id="subtitle"> (But not the Super Hard CIS1200 Version!)</h1>

      <canvas id ="main-canvas"
    ref={canvasRef}  
    width = "800" height = "600" ></canvas>
    </div>

      <div id="controls">
      <input ref = {colorRef} type = "color"></input>
    {/* <input onChange = {HandleSlider}  id="width-slider" type = "range" min="1" max="10"></input> */}
    <input  ref={sliderRef} type = "range" min="1" max="70"></input>
    <button ref ={buttonRef}>Clear All</button>
    <button ref ={eraseRef}>Erase Mode</button>
      </div>
    
    
   
    
    </>
  );





  



  // function HandleMouseDown() {
  //   // alert("We made it to HandleMouseDown");
  //   // alert("Drag Status1: " + isDragging);
  //   setIsDragging(true);
  //   // alert("Drag Status2: " + isDragging);
  //   console.log("Mouse is moving over the canvas");
  //   context.beginPath();
  //   context.moveTo(event.offsetX, event.offsetY); 
  // }


  // function HandleMouseMove() {
  //   // alert("In Mouse Move Drag Status1: " + isDragging);
  //   if(isDragging){
  //     console.log("We should be dragging and drawing");
  //     // context.fillRect(event.offsetX, event.offsetY, 3,3);
  //     context.lineWidth = lineWidth;
  //     context.strokeStyle = color;
  //     context.lineTo(event.offsetX, event.offsetY);
  //     context.stroke(); 
  //     alert("Checkpoint ");
  // } else {
  //     console.log("Mouse is moving over the canvas, but we don't draw");
  // }
  // }

  

}

// onMouseDown={HandleMouseDown(contextRef)} 
// onMouseMove={HandleMouseMove(contextRef, isDragging, lineWidth)}
// onMouseUp={HandelMouseUp(setIsDragging)}

function testAlert(){
  alert("Test Alert");
}

function HandelMouseUp(setIsDragging) {
  setIsDragging(false);
}







export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Paint Application!</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
