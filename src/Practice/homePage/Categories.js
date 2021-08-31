import MenuIcon from '@material-ui/icons/Menu';
import {useState} from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
const Categories = () => {
     const [dropdownOpen, setdropdownOpen] = useState(false);
     const toggle=()=>setdropdownOpen(!dropdownOpen)
    return (
        <div className="categories">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <MenuIcon className="menuIcon"/>
                    All categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Menu1</DropdownItem>
                    <DropdownItem>Menu1</DropdownItem>
                    <DropdownItem>Menu1</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <ul className="links">
                <li className="link_item">
                    <a className="link active">
                        Home
                    </a>
                </li>
                <li className="link_item">
                    <a className="link">
                        New arrivals
                    </a>
                </li>
                <li className="link_item">
                    <a className="link">
                        Trending
                    </a>
                </li>
                <li className="link_item">
                    <a className="link">
                        Deals for you
                    </a>
                </li>
                <li className="link_item">
                    <a className="link">
                        Discounts
                    </a>
                </li>
                <li className="link_item">
                    <a className="link">
                        Weekly offers
                    </a>
                </li>
                <li className="link_item">
                    <a className="link">
                        Become a ventor
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Categories;