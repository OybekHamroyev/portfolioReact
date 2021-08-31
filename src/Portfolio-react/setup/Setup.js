import NavSec from '../home/NavSec';
import { Reveal } from 'react-reveal'
import SetupInfo from './SetupInfo';
import Footer from '../footer/Footer';
import SetupMain from './SetupMain';
const Setup = () => {
    return (
        <div>
            <Reveal effect="animNav" duration="750">
                <NavSec/>
            </Reveal>
            <Reveal effect="fadeInfo" duration="1250">
                <SetupInfo/>
            </Reveal>
            <SetupMain/>
            <Footer/>
        </div>
    );
};


export default Setup;