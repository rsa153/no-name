import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
// import { Image } from "../components/Images";
// import flower1 from "../images/ChoosePet/flower1.jpg";
import flower2 from "../images/ChoosePet/flower2.jpg";
// import flower3 from "../images/ChoosePet/flower3.jpg";
// import flower4 from "../images/ChoosePet/flower4.jpg";
// import flower5 from "../images/ChoosePet/flower5.jpg";
import NavbarPage from "../components/Nav";
import CardButton from "../components/Card";

class Pet extends Component {
  myfunction() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div className="Pet" style={{
        background: "#FAF0BA",
        minHeight: "100vh",
        resizeMode: 'cover',
      }}>

        <NavbarPage />
        
        <Container style={{padding: "0px", margin: "0px"}}>
          <Row>
            <Col>
            <CardButton
            image ={flower2}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower2}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower2}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower2}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower2}/>
            </Col>
               </Row>
        </Container>
    
      </div>
    );
  }
}
export default Pet;
