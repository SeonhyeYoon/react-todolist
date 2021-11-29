/*
      REACT EVENTS
      REACT STATE
      useState ---
      useContext
      useReducer
      useEffect
      use--- hook---function()
*/
import {useState} from 'react'

function Counter(props){
    const [count, setCount] = useState(12);


  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(count++)}>increment</button>
    </div>
  )
}

export default Counter