import { useReducer } from "react"
const initialState={count:0}

function reducer(state,action){
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default:
            return state

    }
}


const CounterUseReducer = () => {
    const [state,dispatch] = useReducer(reducer , initialState)
  return (

    <div>
      <h1>counter with useREducer</h1>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>inc</button>
      <button onClick={()=>dispatch({type:"decrement"})}>dec</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default CounterUseReducer
