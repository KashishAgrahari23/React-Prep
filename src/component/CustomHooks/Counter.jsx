import React from 'react'
import useCount from './useCount'

const Counter = () => {
    const {count, handleInc} = useCount()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleInc} >+</button>
      
    </div>
  )
}

export default Counter
