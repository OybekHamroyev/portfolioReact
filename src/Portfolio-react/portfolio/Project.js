import { GitHub} from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import { Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import db from '../firebase/config';

const Project = () => {
    const [projectsData, setprojectsData] = useState([]); //loyihada 2ta bir xil useState ishlatma
    useEffect(() => {
        db.collection('projects').onSnapshot(snapshot=>setprojectsData(snapshot.docs.map(doc=>doc.data())))
    }, []);
    return (
        <div className="portfolioAnim">
            
            <Container>
                <Row>
                    {projectsData.map((project, index) => (
                        <Col md="12" key={index}>    {/* css da .col-md-12 qilib styl beriladi  */}
                            <div className="projectCard">
                                <img src={project.image} />
                                <div className="projectTitles">
                                    <div className="projectAbout">
                                        <h3>{project.projectName}</h3>
                                        <p>{project.projectDescription}</p>
                                    </div>
                                    <div className="projectButtons">
                                        <a href="github.com" target="_blank">Source<LinkIcon /></a>
                                        <a href="/netlify.app" target="_blank">Demo<GitHub /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>))}
                </Row>
            </Container>
        </div>
    );
};


export default Project;