import React, { useMemo, useState } from 'react'

const Child = React.memo(({val})=>{
    console.log("child ")
    return (
        <h2>{val.name}</h2>
    )
})

const Memo = () => {
    const [ count , setCount] = useState(0)
    const obj = useMemo(()=>{
        return {name:"kashsish"}
    },[])
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>button</button>
      <Child val={obj} />
    </div>
  )
}

export default Memo
