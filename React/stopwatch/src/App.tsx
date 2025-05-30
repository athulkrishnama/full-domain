import { useEffect, useState } from "react"

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    let intervel:number | undefined;
    if (isRunning) {
      intervel = setInterval(() => {
        setTime(prev => prev + 100)
      }, 100)
    }else{
      clearInterval(intervel)
    }

    return ()=>clearInterval(intervel);
  },[isRunning])
  return (
    <>
      <h1>Time:{time}</h1>
      <button onClick={()=>setIsRunning(true)}>Start</button>
      <button onClick={()=>setIsRunning(false)}>Stop</button>
      <button onClick={()=>{setIsRunning(false); setTime(0)}}>Reset</button>
    </>
  )
}

export default App
