import React, {useState} from 'react';
import "./header.css"
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header(props) {

    const [menu , setMenu] = useState(false)

    function handleClick(){
        document.querySelector("header .navigation").classList.remove("nav")
        setMenu(true)
    }

    return (
        <>
        <header className={"header"} >
           <div className="wrapper flex   ">
               <a href="#" className={"logo"}>Portfolio</a>
                   <ul className={`navigation ${menu ? "" : "nav"} `} >
                       <li onClick={handleClick} ><Link to={"/posts"}>Posts</Link></li>
                       <li onClick={handleClick} ><Link to={"/todos"}>Todos</Link></li>
                       <li onClick={handleClick} ><Link to={"/users"}>Users</Link></li>
                   </ul>
               {menu ? <MenuIcon className={"menu"} onClick={()=>setMenu(prev=>!prev)} /> : <CloseIcon className={"menu"} onClick={()=>setMenu(prev=>!prev)} />}
           </div>
        </header>
        </>
    );
}

export default Header;
