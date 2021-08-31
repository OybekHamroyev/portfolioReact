import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import "./animation.css";
import Reveal from 'react-reveal/Reveal';
import Harakat from 'react-reveal/Shake';
const RevealApp = () => {
    return (
        <div>
            <Fade left>
                <h1>Hello React reveal</h1>  
            </Fade>
            <Fade top>
                <h1>Hello React reveal top</h1>  
            </Fade>

            <Flip left>
                <h1>Hello React reveal Flip</h1>  
            </Flip>
            <Harakat>
                <h1>Shark</h1>
            </Harakat>

            {/* effect="animText"  animation.css(animatsiya) ichidagi class nomi*/}
            <Reveal effect="animText" duration="700">
                <h1>React Reveal custom css effect</h1>
            </Reveal>
        </div>
    );
};

export default RevealApp;