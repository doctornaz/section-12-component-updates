import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const[showParagraph, setShowParagraph] = useState(false);

  console.log('App running');

  const toggleParagraphHandler = () =>{
    setShowParagraph((prevState)=> !prevState);
  }

  return (
    //The way it's done in this case means oth demooutput
    // and button even though won't be necessarily
    // re-rendered, they will be re-evaluated
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      {/* React.memo won't work for the button since the toggleParagraphHandler function is always re-created. It does the same thing but the "reference" always changes between re-evaluations, and therefore the props changed and the button will be re-evaluated.*/}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
