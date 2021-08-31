import SearchIcon  from '@material-ui/icons/Search';
import React from 'react';
import navLogo from "../images/logo.png";
// import like from "../images/"
const Nav = () => {
    return (
        <div>
            <nav className="navigation">
                <a href="#" className="nav-logo">
                    <img src={navLogo}></img>
                </a>
                <div className="searchSec">
                    <form>
                        <input className="searchInput" placeholder="Search for Products, Brands & Categories"/>
                        <button className="searchBtn" type="submit">
                            <SearchIcon/>
                        </button>
                    </form>
                </div>
                <div className="icons">
                    <a href="#" className="sectors">
                        q
                    </a>
                    <a href="#" className="sectors">
                        q
                    </a>
                    <a href="#" className="sectors">
                        q
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Nav;