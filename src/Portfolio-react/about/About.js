import NavSec from '../home/NavSec';
import {Reveal} from 'react-reveal'
import AboutInfo from './AboutInfo';
import Footer from '../footer/Footer'
import AboutMain from './AboutMain'
const About = () => {
    return (
        <div>
            <Reveal effect="animNav" duration="750">
                <NavSec/>
            </Reveal>
            <Reveal effect="fadeInup" duration="1786">
                <AboutInfo/> 
            </Reveal>
            <AboutMain/>
            <Footer/>
        </div>
    );
};
 
export default About;