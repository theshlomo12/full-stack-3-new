import React , {useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
const [color, setColor] = useState("green")

  return (
    <div className="App">
<h1 style={{backgroundColor:color}} onClick={()=>{setColor(generateRandomColor)}}>{color}</h1>
    </div>
  );
}

export default App;
