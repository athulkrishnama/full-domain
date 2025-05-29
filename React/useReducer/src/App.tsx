import { useReducer } from "react"
interface State{
  counter:number,
  err:string | null;
}

interface Action{
  type: "increment" | "decrement",
}

const reducer = (state:State, action:Action)=>{
  const {type} = action;

  switch(type){
    case "increment":{
      const newCount = state.counter + 1;
      const hasError = newCount > 5;
      return {...state, counter:hasError ? state.counter : newCount, err:hasError ? "Maximum count is 5":null};
    }
    case "decrement":{
      const newCount = state.counter - 1;
      const hasError = newCount <= 0;
      return {...state, counter:hasError ? state.counter : newCount, err:hasError ? "Minimum count is 1": null}

    } 
    default:
      return state
  }
}
function App() {

  const [state, dispatch] = useReducer(reducer, {counter:0, err:null})
  return (
    <>
      <h3>Count: {state.counter}</h3>
      {state.err && <h5 style={{color:'red'}}>{state.err}</h5>}
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </>
  )
}

export default App
