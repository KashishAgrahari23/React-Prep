import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [count,setCount] = useState(0)
    const inputRef = useRef(0)
    
    const handleFocus=()=>{
        setCount(count+1)
        inputRef.current= inputRef.current+1
        console.log(inputRef.current)
        console.log(count)
    }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='asdf' />
      <button onClick={handleFocus}>button</button>
    </div>
  )
}

export default UseRef
