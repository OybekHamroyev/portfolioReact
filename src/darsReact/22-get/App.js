import axios from 'axios';
import React, {useState, useEffect} from 'react';

const GetApp = () => {
const [users, setUsers]=useState([]);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{console.log(res); setUsers(res.data)})
    .catch(err=>console.error("Error xatolik yuz berdi!"))
}, [])
    return (
        <div>
            {users.map(user=>{
               return <div key={user.id}>
                    <h3 >{user.name}</h3>
                    <h4>{user.phone}</h4>
                    <p>{user.username}</p>
                </div>
            })}
        </div>
    );
};

export default GetApp;