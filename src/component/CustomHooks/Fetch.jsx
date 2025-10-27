import React, { useEffect, useState } from 'react'

const useFetch=((url)=>{
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(datas=>setData(datas))
    },[url])

    return data
})

const Fetch = () => {
    const data = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      <ul>
        {data.map((elem,i)=>{
           return  <li key={i}>{elem.name}</li>
        })}
    </ul>
    </div>
  )
}

export default Fetch
