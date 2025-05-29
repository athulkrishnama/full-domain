import { useMemo, useState } from "react"

function App() {
  const [count, setCount]:[number, React.Dispatch<React.SetStateAction<number>>] = useState(1);
  const double:number = useMemo(()=>{
    return count * 2;
  }, []);

  const increment = ()=>{
    setCount((prev)=>prev+1);
  }
  return (
    <>
      <h3>Count: {count}</h3>
      <h3>Double: {double}</h3>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
