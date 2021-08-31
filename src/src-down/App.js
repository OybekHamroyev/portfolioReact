import React from 'react';
import Header from "./compoenent/Header/Header";
import Posts from "./compoenent/Section/Posts/Posts";
import {Route, Switch} from "react-router-dom"
import Todos from "./compoenent/Section/Todo/Todos";
import Users from "./compoenent/Section/Users/Users";
import "./index.css"
import OnePost from "./compoenent/Section/Posts/OnePost";

function App(props) {
    return (
        <>
            <Header/>
            <section>
                    <Switch>
                        <Route path={"/todos"} component={Todos} />
                        <Route path={"/users"} component={Users} />
                        <Route path={"/posts/:id"} component={OnePost} />
                        <Route path={"/posts"} component={Posts} />
                    </Switch>
            </section>
        </>
    );
}

export default App;

