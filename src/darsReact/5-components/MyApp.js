import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Container, Row } from 'reactstrap'

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log("aap")
        //<> </> o'rniga <React.Fragment> ishlatish mumkin
        return (
            <React.Fragment>
                <h1 className="firstText">Hello React</h1>
                <p>lorem ipsum</p>

{/* Conteynerdan foydalanish(Konteyner->qator->ustun->(md=4 kenglik ulchami)) va Alert komponentni ichiga joylashtiramiz */}
                <Container>
                    <Row>
                        <Col md="4">
                            <Alert color="danger">
                                This is red Alert component
                            </Alert>
                        </Col>
                    </Row>
                </Container>
                {/* yoki */}
            </React.Fragment>
        );
    }
}