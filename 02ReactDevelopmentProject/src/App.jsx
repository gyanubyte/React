import { useState } from "react";
function App() {
  
  const userName = "Gyani Bhai || Heavy Coder";
  let [counter, setCounter] = useState(16);

  function AddValue()
  {
    if(counter < 20)
    {
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    }
  }
  const RemoveValue = () => {
    
    if(counter > 0)
    {
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
   
  }
 
  return (
    
      <div>
      <h1>{userName}</h1>
      <h1>Count:{counter}</h1>
      <button onClick={AddValue}>Add Value</button>
      <br/>
      <button onClick={RemoveValue}>Remove Value</button>
      </div> 
  )
}

export default App
