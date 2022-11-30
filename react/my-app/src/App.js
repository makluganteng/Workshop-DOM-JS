import { useState } from "react";


function App() {
  const [toggle, setToggle] = useState(true)
  const [textColor, setTextColor] = useState('black');
  const [isBlack, setIsBlack] = useState(true);


  const hideMe = () => {
    setToggle(!toggle)
    setIsBlack(!isBlack);
    setTextColor(isBlack ? '#CCCCCC' : 'black ');
  }

  return (
    <>
    <div>
      {
        toggle ? <p>Hello World</p> : <></> // conditional rendering
      }
      <p style={{color: textColor}}>hello</p>
       <button onClick={hideMe}>Click me</button>
    </div>
    </>    
  );
}

export default App;
