import {React, useEffect, useState} from "react"
const Counter = ()=>{
    const [ count, setCount] = useState(0)
    const [isRunning , setIsRunning] = useState(false)
    useEffect(()=>{
        let timer
        if(isRunning){
            timer = setInterval(()=>{
            setCount((prev)=>prev+1)

        },1000)
    }
        return ()=>clearInterval(timer)

        

    },[isRunning])
    const handleStart=()=>{
        setIsRunning(true)
        
    }
    const handleStop=()=>{
        setIsRunning(false)
    }
    const handleResume=()=>{
        setIsRunning(true)
    }
    const handleReset=()=>{
        setIsRunning(false)
        setCount(0)
    }
    return (
        <>
            <h1>Counter app:-  {count} </h1>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleStop} disabled={!isRunning}>Stop</button>
            <button onClick={handleResume} disabled={isRunning}>Resume</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Counter