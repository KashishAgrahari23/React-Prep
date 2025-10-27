import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [ loading , setLoading] = useState(true)
  const [error , setError] =useState(null)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
          throw new Error("failed")
        }
        setData(await res.json())
      } catch (error) {
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }

    fetchData()
  },[])

  if(loading) return <h2>LOadin....</h2>
  if(error) return <h2>{error}</h2>
  return (
    <div>
      <h1>data</h1>
      {data.map((elem, i) => {
        return(<div key={i}>
          <h4>{elem.title}</h4>
          <img src={elem.image} alt="" />
          <p>{elem.title}</p>
        </div>)
      })}
    </div>
  );
};

export default FetchData;
