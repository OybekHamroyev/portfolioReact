import NavSec from "./NavSec"
import Reveal from 'react-reveal/Reveal';

import AboutInfo from "./AboutInfo";
const HomeMain = () => {
    return (
        <div>
            <Reveal effect="animNav" duration="750">
                <NavSec/>
            </Reveal>
            <AboutInfo/>
        </div>
    );
};

export default HomeMain;