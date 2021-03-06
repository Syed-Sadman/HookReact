import React,{useReducer} from 'react'


const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;        
    }
}


function SumUseReducer() {
    const [count,dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button>Count {count} </button> 
            <button type="button" onClick={()=>dispatch('increment')}>increment </button> 
            <button type="button" onClick={()=>dispatch('decrement')}> decrement  </button>            
        </div>
    )
}

export default SumUseReducer
