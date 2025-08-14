import { useEffect } from "react"

const Counter2=({count,data})=>{

    useEffect(()=>{
        console.log("mounting phase only");
    },[])

    useEffect(()=>{
        console.log("updating phase only");
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("unmount phase only")
        }
    },[])
    return(
        <div>
            <h1>Counter value{count}</h1>
            <h1>Data value{data}</h1>
        </div>
    )
}
export default Counter2