import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Blog from './Blog';
import About from './About'
const Router = () => {

    const Home = () =>{
        return <div>
            <h1>Home</h1>
            <p>This is home page</p>
        </div>
    }
    return (
        <BrowserRouter>
             <Nav/>
             <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/blog" component={Blog}/>
             <Route path="/About" component={About}/>
             </Switch>
        </BrowserRouter>
        );

};

export default Router;