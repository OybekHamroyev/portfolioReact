import React, {useEffect, useState} from 'react';
import "../../../App.css"
import {doGet} from "../../Backend/Backend";
import SelectBox from "../Selectbox/SelectBox";
import BasicPagination from "../Pagination/Pagination";

function Todos(props) {

    const [todos , setTodos] = useState([])
    const [data , setData] = useState([])
    const [recover  , setRecover] = useState("")
    const [active , setActive] = useState(false)
    const [page , setPage] = useState(1)

    function filter(userId , check , page){
        const res = data.filter(todo => (todo.userId === +userId || !userId) && (todo.completed === check)).filter((item,index)=>{
            return index>(page-1)*10 && index<=(page)*10
        })
        setTodos(res)
    }

    async function getTodos(){
        const res = await doGet("/todos")
        setTodos(res.filter((item,index)=>index>0 && index<=15))
        setData(res)
    }

    useEffect(()=>{
        getTodos()
    },[])

    function handleChange(e){
        let userId = e.target.value
        filter(userId , active , page )
        setRecover(userId)
    }

    function checkAll(e){
        setActive(e.target.checked)
        filter( recover , e.target.checked , page)
    }

    function reset(){
        setActive(false)
        setRecover("")
        setTodos(data)
    }


    useEffect(()=>{
        filter(recover , active , page)
    },[page])

    return (
        <>
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-3">
                        <SelectBox recover={recover} handleChange={handleChange} />
                    </div>
                    <div className="col-md-3">
                        <button onClick={reset} className={"btn"}>reset</button>
                    </div>
                    <div className="col-md-3">
                        <label>
                            search
                            <input checked={active} onChange={checkAll} className={"check"} type="checkbox"/>
                        </label>
                    </div>
                </div>
                <div className="row">
                        {
                            todos.map(todo=><div key={todo.id} className={"col-md-12"} >
                               <div className="flex">
                                   <label htmlFor={"for/" + todo.id }>{todo.title}</label>
                                   <input  type="checkbox" id={"for/" + todo.id} className={"check"} defaultChecked={todo.completed} />
                               </div>
                            </div>)
                        }
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <BasicPagination setPage={setPage} page={page} todos={todos} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todos;
