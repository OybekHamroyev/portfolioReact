import NavSec from "../home/NavSec";
import Pageinfo from "./Pageinfo";
import Project from "./Project";
import Footer from '../footer/Footer'
import {Reveal} from 'react-reveal';
const Portfolio = () => {
    return (
        <div>
            <Reveal effect="animNav" duration="750">
                <NavSec/>
            </Reveal>
            <Reveal effect="fadeInup" duration="1250">
                <Pageinfo/> 
            </Reveal>
            <Reveal effect="potfolioAnim" duration="1800">
                <Project/>
             </Reveal>
                 <Footer/>
 

        </div>
    );
};

export default Portfolio;