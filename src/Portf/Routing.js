import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMain from "./home/NavMain";
import './styles/main.scss';
import './styles/animation.scss';
const Routing = () => {
    return (
        <Router>
            <Route path="/" component={NavMain}/>
        </Router>

        );
};

export default Routing;