import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
const NavSec = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle=()=>{
        setisOpen(true)
    }
    const [scrolled, setscrolled] = useState(false);
    const handleScroll=()=>{
        const offset=window.scrollY
        if(offset>200)
        setscrolled(true)
        else setscrolled(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    const x=['navbar'];
    if(scrolled) x.push('fixed')
    return (
        <Navbar expand="md" light className={x.join('')}>
            <Link className='navbar-brand'>
                <b>Oybek</b>DEV
            </Link>
            <NavbarToggler onClick={toggle}/>
            <Collapse navbar isOpen={isOpen}>
                <Nav navbar>
                    <NavItem>
                        <Link>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Setup</Link>
                    </NavItem>
                    <NavItem>
                        <Link>Portfolio</Link>
                    </NavItem>
                    <NavItem>
                        <Link>About me</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavSec;