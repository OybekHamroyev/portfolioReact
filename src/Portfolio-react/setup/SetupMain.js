import { ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import db from '../firebase/config'
const SetupMain = () => {
    const [setups, setsetups] = useState([]);
    useEffect(() => {
        db.collection('setup').onSnapshot(snapshot=>setsetups(snapshot.docs.map(doc=>doc.data())));
    }, []);
    return (
        <div className="setupMain">
            {setups.map(setup=><div className="setupImage">
               <img  src={setup.image}/>
                </div>)}
                <Container>
                    <Row>
                        <Col md="8">
                            <div className="mySetup">
                                <span className="laptopSpecs">
                                    <ul className="">
                                        <a href="">
                                                <h2>ASUS  X503F</h2><ArrowUpward/>
                                        </a>
                                        <li>Intel Core I5</li>
                                        <li>4GB RAM</li>
                                        <li>HDD 500GB</li>
                                        <li>Display FHD 15.6</li>
                                        <li>NVIDIA GT540M 2GB</li>

                                    </ul>
                                </span>
                                <span className="laptopSpecs">
                                    <ul className="">
                                        <a href="">
                                            <h2>LENOVO G505</h2><ArrowUpward/>
                                        </a>
                                        <li>Intel Celeron</li>
                                        <li>4GB RAM</li>
                                        <li>HDD 500GB</li>
                                        <li>Display FHD 19</li>
                                        <li>NVIDIA GTX 1GB</li>

                                    </ul>
                                </span>
                                <span className="keyboardSpecs">
                                    <ul><h2>Keyboar & Mouse</h2>
                                        <li>
                                            AVTECH multimedia keyboard
                                        </li>
                                        <li>
                                            Multimedia Keyboard
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};


export default SetupMain;