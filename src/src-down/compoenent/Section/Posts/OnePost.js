import React, {useEffect, useState} from 'react';
import "../../../App.css"
import {doGet} from "../../Backend/Backend";

function OnePost({match : {params : {id}}}) {

    const [onePots , setOnePost]  = useState("")
    const [users , setOneUsers]  = useState("")

    async function getOnePost(){
        const res = await doGet("/posts/" + id)
        const dev = await doGet("/users/" + res.userId)
        setOneUsers(dev)
        setOnePost(res)
    }

    useEffect(()=>{
        getOnePost()
    },[])


    return (
        <>
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                {users ? users.id + "/" + users.name : "loading"}
                            </div>
                            <div className="card-body">
                                {users ? users.email : "loading"}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                { onePots ? onePots.id +"/ " + onePots.title : "loading"}
                            </div>
                            <div className="card-body">
                                {onePots ? onePots.body : "loading"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OnePost;

