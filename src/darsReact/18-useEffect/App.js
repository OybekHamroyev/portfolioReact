import { useEffect, useState } from "react";
const App = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title=`Siz ${count} marta bosdinsgiz`;
        console.log(`Siz ${count} marta bosdinsgiz`)
    },[count] );
    
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>bosing</button>
            <p>Siz {count} marta bosdingiz</p>            
        </div>
    );
};
 
export default App;