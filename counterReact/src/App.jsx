import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(15);
  const [message,setMessage]=useState("");
  const addValue = () => {
    console.log("Value Added", counter);
    if (counter < 20) {
      setCounter(counter + 1);
      setMessage("");
    }
    else{
      setMessage("You have reached you upper limit")
    }

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setMessage("");
    }
    else{
      setMessage("you have reached your lower limit")
    }
  }

  return (
    <>
    <p id='message'>{message}</p>
      <h1>Chai aur react</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue} id='add-number'>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
