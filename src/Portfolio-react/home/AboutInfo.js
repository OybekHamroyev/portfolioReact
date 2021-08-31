import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import db from '../firebase/config';    //firebase dan olamiz
import YouTube from '@material-ui/icons/YouTube';
import GitHub from '@material-ui/icons/GitHub';
import Telegram from '@material-ui/icons/Telegram';
import Instagram from '@material-ui/icons/Instagram';
import Reveal from 'react-reveal/Reveal';
const AboutInfo = () => {
    const [portfolios, setportfolios] = useState([]);
    useEffect(() => {
        db.collection("portfolio").onSnapshot(snapshot=>setportfolios(snapshot.docs.map(doc=>doc.data())))
        // collection("portfolio") - saytdagi collection va nomi
        //onSnapshot() - ishida callback fya
    }, []);
    return (
        <div className="aboutinfo">
            {portfolios.map(portfolio=>
                <div className="side-blocks" key={portfolio.title}>
                    <div className="side-one">
                        <Reveal effect="fadeInup" duration="1250">
                            <h1 className="title">{portfolio.title}</h1> 
                            <p className="description">{portfolio.description}</p>
                        </Reveal>
                        <div className="buttons">
                            <Link to="#" className="linkBtn">About me</Link>
                            <Link to="/portfolio" className="linkBtn">Portfolio</Link>
                        </div>
                        <div className="socialIcons">
                            <a href="https://www.youtube.com/" target="_blank">
                                <YouTube/>
                            </a>
                            <a href="#" target="_blank">
                                <GitHub/>
                            </a>
                            <a href="#" target="_blank">
                                <Telegram/>
                            </a>
                            <a href="#" target="_blank">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                    <div className="side-two">
                        <img src={portfolio.image} alt="my image"/>
                    </div>
                </div> )}
        </div>
    );
};


export default AboutInfo;