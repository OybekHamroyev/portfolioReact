import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Main from './Main';
import Products from './Products'
import About from "./About";
function App () {
    return (
    <Router>
    <div>
            <ul>
                <li><Link to="/">Asosiy</Link></li>
            </ul>
            <ul>
                <li><Link to="/Products">Mahsulotlar</Link></li>
            </ul>
            <ul>
                <li><Link to="/About">Biz haqimizda</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/products" component={Products}/>
            <Route path="/about" component={About}/>
        </Switch>
        </Router>
           )
}
export default App