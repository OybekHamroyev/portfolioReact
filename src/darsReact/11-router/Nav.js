import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './nav.css'
const Nav = () => {
    return (
        <div>
            <nav className="nav">
                <Link className="navbar-brand" to="/">Home</Link>
                <ul>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
 
export default Nav;