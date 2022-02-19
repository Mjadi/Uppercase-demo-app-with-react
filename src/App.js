import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const center = {
  textAlign: 'center'
}

function App() {
  const handledOnChanged = (e) => {
    // console.log("changed");
    newText(e.target.value);
  }

  const onClick =() => {
    // console.log("Clicked");
    const newVal = text.toLocaleUpperCase();
    newText(newVal);
  }

const clearArea = () => {
    // console.log("Cleared");
    newText("");
}

  const [text, newText] = useState();
  return (
  <>
  <div>
    <h1 style={center}>Convert your app to uppercase</h1>
    <div className="box" style={center}>
      <textarea name="someshit" id="yeah" cols="80" rows="20" value={text} onChange={handledOnChanged}></textarea>
    </div>
    <div style={center}><button onClick={onClick}>Convert</button>
    <button onClick={clearArea}  style={{margin: "23px"}}>Clear</button></div>
    
  </div>
    </>
  )
}

export default App;
