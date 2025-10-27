import React, { useReducer } from 'react'

const initialState ={
    name:"",
    mail:"",
    age:"",
    data:[]
}

function reducer(state , action){
    switch(action.type){
        case "update" :
            return {
                ...state , [action.field]:action.value}
        case "submit":
            const New = {
                name:state.name,
                mail:state.mail,
                age:state.age
            }
            return {
                ...state , 
                data:[...state.data , New]
            }
        default:
            return state

            }

    }



const FormUseREducer = () => {
    const [ state , dispatch ] = useReducer(reducer , initialState)
    const handleChange=(field)=>(e)=>{
        dispatch({
            type:"update",

        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:"submit"})
    }
  return (
    <div>
      <form action="Submit" onSubmit={handleSubmit}>
            <input type="text" placeholder='enter name' onChange={handleChange("name")}/>
            <input type="text" placeholder='enter mail' onChange={handleChange("mail")}/>
            <input type="text" placeholder='enter age' onChange={handleChange("age")}/>
            <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormUseREducer
