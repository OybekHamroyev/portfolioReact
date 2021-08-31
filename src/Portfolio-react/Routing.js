import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import './styles/animation.scss';
import './styles/responsive.scss';
import HomeMain from './home/HomeMain';
import Portfolio from './portfolio/Portfolio';
import Setup from './setup/Setup';
import About from './about/About';
const Routing = () => {
    return (
            <Router>
                <Switch>
                    
                <Route exact path="/" component={HomeMain} />
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/setup" component={Setup}/>
                <Route path="/about" component={About}/>
                </Switch>
            </Router>                        
    );
};

export default Routing;