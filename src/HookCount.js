import React,{useState} from 'react'

function HookCount() {
    
const [count, setCount]=useState(0);
const [theme,setTheme]=useState('blue');


  function increCount(){
    setCount(prevCount=>prevCount+1)
  }

  function decreCount(){
    setCount(prevCount=>prevCount-1)
  }
  function themCh(){
    setTheme('red');
  }

    return (
        <div>
            <button onClick={decreCount}>-</button>
            <button>Count {count}{theme} </button>
            <button onClick={increCount}>+</button>
            <button onClick={themCh}>change the theme</button>
            <button onClick={()=>{setTheme('blue')}}>change to default theme</button>
        </div>
    )
}

export default HookCount;




