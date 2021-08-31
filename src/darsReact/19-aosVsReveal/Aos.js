import { useEffect } from 'react';
import './aos.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import Img1 from "./img/Img 022.jpg";
import Img2 from "./img/Img 025.jpg"
import Img3 from "./img/Img 033.jpg"
import Img4 from "./img/Img 036.jpg"

const Aos = () => {
    useEffect(() => {
        AOS.init({
        //    duration: 600, offset:200, easing:'ease-in-sine', dealy:100
        })
    }, [])
    return (
            <div className="imageSection">
                <img data-aos="fade-zoom-in" data-aos-duration="900" src={Img1}/>
                <img src={Img2} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear"/>
                <img src={Img3} data-aos="fade-up" data-aos-duration="1500"/>
                <img src={Img4} data-aos="fade-down" data-aos-duration="2000"/>
                <img src={Img3} data-aos="fade-up-right" data-aos-delay="2000"
                 data-aos-duration="1500"/>
                <img src={Img2} data-aos="flip-left" data-aos-duration="1000" data-aos-easing="ease"/>
                <img src={Img1} data-aos="zoom-in" data-aos-duration="1000" />


            </div>
        );
};

export default Aos;