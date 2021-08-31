import axios from "axios";
import React, { useEffect, useState } from "react";
// import axios from 'axios';
function DataFetching() {
const [user, setUser]=useState({});
const [id, setId]=useState(2);
const [idFromInput, setIdFromInput]=useState(1);
// useEffect(()=>{fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
// .then(data=>{
// console.log(data);    
// setUser(data)}).catch(error=>console.log(error))},[idFromInput])

useEffect(()=>{axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>{    
setUser(res.data)}).catch(error=>console.log(error))},[idFromInput])
//axios da (.) quyib so'rov nomi(get) yoziladi. bitta then ichida json() orniga - (res.data) yozamiz

return (<div>
        <input value={id} onChange={(e)=>setId(e.target.value)} />
        <button onClick={()=>setIdFromInput(id)}>Fetch User</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone#</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
            </tbody>
        </table>
    </div>)
}
export default DataFetching;