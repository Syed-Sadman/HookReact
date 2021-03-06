import React,{useReducer} from 'react'


const initialState={
    counter:0
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {counter : state.counter +1};
        case 'decrement':
            return {counter:state.counter-1};
        default:
            return state.counter;        
    }
}


function ComplexUseReduceSum() {
    const [count,dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button>Count {count.counter} </button> 
            <button type="button" onClick={()=>dispatch({type:'increment'})}>increment </button> 
            <button type="button" onClick={()=>dispatch({type:'decrement'})}> decrement  </button>            
        </div>
    )
}

export default ComplexUseReduceSum
