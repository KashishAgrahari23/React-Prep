import React, { useReducer } from 'react'

const initialState ={
    name:"",
    mail:"",
    age:"",
    data:[]
}

function reducer(state , action){
    switch(action.type){
        case "name" :

    }
}


const FormUseREducer = () => {
    const [ state , dispatch ] = useReducer(reducer , initialState)
    const handleSubmit=()=>{

    }
  return (
    <div>
      <form action="Submit" onSubmit={handleClick}>
            

      </form>
    </div>
  )
}

export default FormUseREducer
