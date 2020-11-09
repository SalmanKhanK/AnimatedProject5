import React from 'react'
import Mask from '../animation/Mask.json'
import Lottie from "react-lottie"
import Fade from 'react-reveal/Fade';
import { Row,Col, Container} from 'react-bootstrap';
import '../App.css'
export const Cause = () => {
  
    return (
        <Container  style={{marginTop:"60px"}}>
            <h3 style={{paddingTop:"40px",textAlign:"center"}}>Wear a mask maintain distance stay safe</h3>
  <Row>
  <Col xs={12} md={6}  className="mt"> 
      <h5> HOW IT SPREADS!</h5>
      <Fade left big>
         <p style={{fontWeight:"100",fontSize:"20px"}}>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces </p>
      </Fade>
    </Col>
    <Col xs={12} md={5}>
    <Lottie
                    options={{
                        animationData: Mask,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
    </Col>
  
  </Row> 
  <hr/>
</Container>
    )
}
