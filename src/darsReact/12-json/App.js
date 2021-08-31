import React from 'react';
import Users from './db.json';

const App = () => {
    return (
        <div>
            {Users.map(element=>{
                return <div>
                            <h2 style={{color:"blue"}}>Ism: {element.name}</h2>
                            <h3>yoshi: {element.age}</h3>
                            <p style={{color:"green"}}>Davlat: {element.country}</p>
                            <p>tel: {element.phone}</p>
                            <hr/>
                       </div>
            })}
        </div>
    );
};


export default App;