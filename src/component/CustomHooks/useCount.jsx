import React, {  useEffect, useState } from 'react'

const useCount = () => {
    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
    const handleInc=()=>{
        setCount((prev)=>prev+1)
    }
  return {count,handleInc}
}

export default useCount
