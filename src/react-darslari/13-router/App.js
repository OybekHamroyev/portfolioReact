import {PureComponent} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import About from './about';
import Home from './home';
import Products from './products';
class App extends PureComponent {
    render() { 
        return ( 
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Asosiy</Link>
                        </li>
                        <li>
                            <Link to="/products">Mahsulotlar</Link>
                        </li>
                        <li>
                            <Link to="/about">Biz haqimizda</Link>
                        </li>
                    </ul>
                    <Switch>{/*switch- 1-uchragan, exact bitta path uchun 1 ta route ishlatmoqchi bulsa*/}
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/products" component={Products}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
         );

    }
} 
export default App;