import { useState } from "react";

const Counter=()=>{
    const[count,newCount]=useState(0)
    const[rCounter,setRcounter]=useState(10)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <h2>R Counter:{rCounter}</h2>
            <button onClick={()=>newCount(count+1)}>Update Counter</button>
            <button onClick={()=>setRcounter(rCounter-1)}>Update R Counter</button>
        </div>
    )
}
export default Counter