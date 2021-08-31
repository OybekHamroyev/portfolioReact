import { Reveal } from "react-reveal"
import NavSec from "./NavSec"
const NavMain = () => {
    return (
        <div>
            <Reveal>
                <NavSec effect="animNav"/>
            </Reveal>
        </div>
    );
};

export default NavMain;