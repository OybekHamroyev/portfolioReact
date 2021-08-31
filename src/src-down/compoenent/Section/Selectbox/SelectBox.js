import React, {useEffect, useState} from 'react';
import {doGet} from "../../Backend/Backend";

function SelectBox({handleChange , recover}) {
    const [users , setUsers]  = useState([])

    async function getUsers(){
        const res = await doGet("/users")
        setUsers(res)
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <>
            <select value={recover && parseInt(recover)} onChange={handleChange} className={"form-control"} >
                <option selected value={""}>All</option>
                {users.map(item=> <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </>
    );
}

export default SelectBox;
