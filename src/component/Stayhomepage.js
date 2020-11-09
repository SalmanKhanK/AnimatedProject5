import React from 'react'
import Lottie from "react-lottie"
import Stayhome from '../animation/Stayhome.json'
import { Row,Col, Container,Alert } from 'react-bootstrap';
import '../App.css'
import Fade from 'react-reveal/Fade';
import useWebAnimations,{fadeInUp} from "@wellyshen/use-web-animations";

export const Stayhomepage = () => {
    //const { ref,playState,getAnimation} = useWebAnimations({...fadeInUp})
 

    return (
        <div style={{marginTop:"150px"}}>
            <h3 className="center">Just stay home</h3>
            <Container>
            <Row>
    <Col xs={12} md={4}>
    <Lottie
                    options={{
                        animationData: Stayhome,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
    </Col>
    <Col xs={12} md={8} style={{marginTop:"60px",paddingTop:"20px"}}>

     <h3 >At this critical time, it is essential that everyone JUST STAY HOME.</h3> 
     <Fade right cascade>
     <p style={{fontWeight:"100",fontSize:"20px"}}>Stay-at-home directives are issued to protect you, your family, and the public at large. Do your part by staying home. Now is not the time for a play date for kids, not the time for a dinner for adults, and not the time for a personal visit to the elderly. Spring break plans should be cancelled, birthday parties should be postponed, extended family dinners should be suspended.</p>
     </Fade>
    </Col>
  </Row>  
            </Container>
        </div>
    )
}
