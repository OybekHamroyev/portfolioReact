import React from 'react';
import MyApp from "./MyApp";
import MyApp2 from "./MyApp2";
import './style.css';
//reactstrap va bootstrap ni paketini yuklaymiz

function App(){
    return (
        <div>
            <MyApp/>
            <MyApp2/>
        </div>
    )
}
export default App;