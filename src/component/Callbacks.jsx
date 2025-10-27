import React, { useCallback, useState } from 'react'

const Child= React.memo(({click})=>{
    console.log("child clicked")
    return <button onClick={click}>click me</button>
})
const Callbacks = () => {
    const[count , setCount] = useState(0)
    const handleClick=useCallback(()=>{
        console.log("click")
    },[])
  return (
    <div>
        <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)} >button</button>
        <Child click={handleClick} />
    </div>
  )
}

export default Callbacks
