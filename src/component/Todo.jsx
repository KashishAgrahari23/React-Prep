import React, { useEffect, useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [isCompleted , setIsCompleted] = useState(false)
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleAdd = () => {
    setData([...data, {title:task,isCompleted:false}]);
    setTask("");
  };
  const handleDelete=(id)=>{
    let newdata= data.filter((_,idx)=>idx!==id)
    setData(newdata)
  }
  const handleStatus=(id)=>{
    let newdata = data.map((elem,idx)=>
        idx==id? {...elem , isCompleted:!isCompleted} : elem
    )
    setData(newdata)

  }
  return (
    <>
      <h1>Todo App</h1>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        placeholder="add a task"
      />
      <button onClick={handleAdd}>Add</button>
      {data.map((elem, i) => {
        return (
          <ul key={i}>
            <li>{elem.title}</li>
            <button onClick={()=>handleDelete(i)} >delete</button>
            <button onClick={()=>handleStatus(i)}>{elem.isCompleted?"Complete":"Pending"}</button>
          </ul>
        );
      })}
    </>
  );
};

export default Todo;
