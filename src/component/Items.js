import React, { useRef,useEffect,useState } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import doctorimg from '../images/images.png'
import "../App.css"
import Fade from 'react-reveal/Fade';
export const Items = () => {
   
    
    return (
        <Container className="mt">
        <Fade bottom cascade delay={1000}>
            <Row style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"40px"}} >
    <Col xs={12} md={6} >
      <Card  className="hoverStyle">
                <Card.Img variant="top" src={doctorimg} height={200} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>

                </Card.Body>
            </Card>
            </Col>
            {/*  */}
            <Col xs={12} md={6} sm={6} className="separateCard">
            <Card  className="hoverStyle">
                <Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJWIiH-r8GCLDxirsTKEWxPzvuWkbejj-EZg&usqp=CAU" height={200}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>

                </Card.Body>
            </Card>
            </Col>
    </Row>
    <Row>
    <Col xs={12} md={12} style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"40px"}} >
            <Card style={{ width: '30rem' }} className="hoverStyle">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyYUt7WgPRcyM_kGbJ9uZPx4qUdx2VwW3hFQ&usqp=CAU"  height={200}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>

                </Card.Body>
            </Card>
            </Col>
    </Row>
    </Fade>
        </Container>
    )
}
