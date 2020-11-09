import React from 'react'
import Typist from 'react-typist';
import Dirty from '../animation/Dirty.json';
import Lottie from "react-lottie"
import '../App.css'
import '../style/Home.css'
import { Row,Col, Container } from 'react-bootstrap';
import useWebAnimations,{fadeInUp} from "@wellyshen/use-web-animations";
export const Home = () => {
  const { keyframes: mainTitledesKey, timing: mainTitledesTime } = fadeInUp;
  const { ref: mainTitledes } = useWebAnimations({
    keyframes: mainTitledesKey,
    timing: {
      ...mainTitledesTime,
      iterations: 1,
      delay: "1000",
      easing: "ease",
    },
  });
    return (
        <Container>
  <Row>
    <Col xs={12} md={4} className="covidImg">
    <Lottie 
                    options={{
                        animationData: Dirty,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
    </Col>
    <Col xs={12} md={6}  className="covidText">
    
     <h3 ref={mainTitledes}>The Coronavirus or COVID-19</h3> 
     <Typist
     avgTypingDelay={40}
      cursor={{ hideWhenDone: true }}
    >
     {/* <Typist.Delay ms={750} /> */}
     <p >is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity, and there is no vaccine. Its novelty means that scientists aren't sure yet how it behaves they have little history to go on.</p>
     </Typist>
    </Col>
  </Row> 
 
<hr/>
</Container>
    )
}
