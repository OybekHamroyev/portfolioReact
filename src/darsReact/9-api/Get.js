import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const GetApp = () => {
    const [post, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{console.log(res.data); setPosts(res.data)})
    },[])
    return (
        <div>
            <Container>
                <Row>
                {post.map(posts=>{    
             return <Col md="4">
                        <Card key={posts.id}>
                            <CardHeader>
                                {posts.title}                    
                            </CardHeader>
                            <CardBody>
                                {posts.body}
                            </CardBody>
                        </Card>
                    </Col>
                })}
                </Row>
            </Container>
        </div>
    );
};

export default GetApp;