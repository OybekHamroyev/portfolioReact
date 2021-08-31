import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css' //bootstrap stillari
const NavSec = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle=()=>{
        setisOpen(!isOpen); 
    }
    const [scrolled, setScrolled] = useState(false)
    const handleScroll=()=>{
        const offset = window.scrollY;
        if (offset > 200 ) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    let x=['navbar']
    if(scrolled){x.push('fixed')}
    return (
        <div>
            <Navbar light expand="md" className={x.join(" ")}>
                <Link to="/" className="navbar-brand">
                    <b>Oybek</b>Dev
                </Link>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/setup">Setup</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">About Me</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};


export default NavSec;