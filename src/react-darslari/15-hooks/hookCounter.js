//basic hooks 1.useState, 2.useEffect, 3.useContext
//advanced hooks useReducer, useCallback, useMemo, useRef
import { useState } from "react"

function HookCounter() {
    const [count, setCount]=useState(0);     //[] count-o'zgaruvchi, setCount-funksiya
    const [name, setName]=useState("")
   
    /////yoki
    // const handleClick=()=>{setCount(count+1)}
    ////

    return (
        // <button onClick={handleClick}>Count {count}</button>
        <button onClick={()=>{setCount(count+1); setName("Naim")}}>Count {count} {name}</button>
    )
}
export default HookCounter;