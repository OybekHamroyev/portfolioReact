import React, {useEffect, useState} from 'react';
import "../../../App.css"
import {doGet} from "../../Backend/Backend";

function Users(props) {

    const [users , setUsers]  = useState([])

    async function getUsers(){
       const res =  await doGet("/users")
        setUsers(res)
    }

    useEffect(()=>{
      getUsers()
    },[])

    return (
        <>
            <div className="wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>t/r</th>
                        <th>name</th>
                        <th>username</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user=> <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Users;
