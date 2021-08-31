import React, {useEffect, useState} from 'react';
import {doGet} from "../../Backend/Backend";
import "../../../App.css"
import SelectBox from "../Selectbox/SelectBox";

function Posts({history}) {

    const [posts , setPosts]  = useState([])
    const [data , setData]  = useState([])

    function filtered(userId){
        const res = data.filter(item=> item.userId === +userId || !userId)
        setPosts(res)
    }

    function handleChange(e){
        const userId  = e.target.value
        filtered(userId)
    }

    async function getPosts(){
      const res =  await doGet("/posts")
        setPosts(res)
        setData(res)
    }

    useEffect(()=>{
        getPosts()
    },[])

    function handleClick(id){
        history.push("/posts/" + id)
    }

    return (
        <>
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-3">
                       <SelectBox handleChange={handleChange} />
                    </div>
                    <div className="col-md-3">
                        <button className={"btn"} > + add</button>
                    </div>
                </div>
                <div className="row">
                    {
                        posts.map(item=><div key={item.id} className={"col-md-3"}>
                            <div className="card" onClick={()=>handleClick(item.id)} >
                                <div className="card-header"><h3>{item.title}</h3></div>
                            <div className="card-body">
                                <p>{item.body}</p>
                            </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
}

export default Posts;

