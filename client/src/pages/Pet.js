import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import flower1 from "../images/ChoosePet/Flower/flower1.jpg";
import flower2 from "../images/ChoosePet/Flower/flower2.jpg";
import flower3 from "../images/ChoosePet/Flower/flower3.jpg";
import flower4 from "../images/ChoosePet/Flower/flower4.jpg";
import flower5 from "../images/ChoosePet/Flower/flower5.jpg";
import NavbarPage from "../components/Nav";
import CardButton from "../components/CardButton";
import { MDBFooter } from "mdbreact";
import CardButtonDisabled from "../components/CardButtonDisabled";
import fish1 from "../images/ChoosePet/Fish/fish1.jpeg";
import fish2 from "../images/ChoosePet/Fish/fish2.png";
import fish3 from "../images/ChoosePet/Fish/fish3.jpg";
import fish4 from "../images/ChoosePet/Fish/fish4.jpeg";
import fish5 from "../images/ChoosePet/Fish/fish5.jpeg";
import bird1 from "../images/ChoosePet/Bird/bird1.jpeg";
import bird2 from "../images/ChoosePet/Bird/bird2.jpeg";
import bird3 from "../images/ChoosePet/Bird/bird3.jpeg";
import bird4 from "../images/ChoosePet/Bird/bird4.png";
import bird5 from "../images/ChoosePet/Bird/bird5.jpeg";
import cat1 from "../images/ChoosePet/Cat/cat1.jpeg";
import cat2 from "../images/ChoosePet/Cat/cat2.jpeg";
import cat3 from "../images/ChoosePet/Cat/cat3.jpeg";
import cat4 from "../images/ChoosePet/Cat/cat4.jpeg";
import cat5 from "../images/ChoosePet/Cat/cat5.jpeg";
import dog1 from "../images/ChoosePet/Dog/dog1.jpeg";
import dog2 from "../images/ChoosePet/Dog/dog2.jpeg";
import dog3 from "../images/ChoosePet/Dog/dog3.png";
import dog4 from "../images/ChoosePet/Dog/dog4.png";
import dog5 from "../images/ChoosePet/Dog/dog5.png";

class Pet extends Component {
  myfunction() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div className="Pet" style={{
        background: "#FAF0BA",
        minHeight: "150vh",
        resizeMode: 'cover',
      }}>

        <NavbarPage />
        
        <Container>
        {/* flower */}
        {/* <div className="block-example border" style ={{
           borderRadius: 30,
           borderWidth: 1,
           borderColor: "#d6d7da"

          }}> */}
        
          {/* <div style ={{
          border: "2em",
          borderColor:"#32CD32"
        }}> */}
          <h2 className = "text-center mt-4"> Level 1: Flower - Pick your favorite flower!  </h2>
      
          <Row className ="m-3">
            <Col>
            <CardButton style={{
              color: "#696969"
            }}
            image ={flower1}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower2}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower3}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower4}/>
            </Col>
            <Col>
            <CardButton 
            image ={flower5}/>
            </Col>
            
          </Row>
        
          {/* </div> */}

          <p className = "text-center"> _______________________________________________________________________________________________________ </p>
          <h2 className = "text-center m-4" style={{
            color: "#696969"
          }}> Level 2: Fish - Not yet Unlocked - Complete Level 1 first </h2>
          <Row className ="m-3">
            <Col>
            <CardButtonDisabled
            image ={fish1}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={fish2}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={fish3}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={fish4}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={fish5}/>
            </Col>
          </Row>

          <p className = "text-center"> _______________________________________________________________________________________________________ </p>
          <h2 className = "text-center m-4" style={{
            color: "#696969"
          }}> Level 3: Bird - Not yet Unlocked - Complete Level 2 first</h2>
          <Row className ="m-3">
            <Col>
            <CardButtonDisabled
            image ={bird1}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={bird2}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={bird3}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={bird4}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={bird5}/>
            </Col>
          </Row>

          <p className = "text-center"> _______________________________________________________________________________________________________ </p>
          <h2 className = "text-center m-4" style={{
            color: "#696969"
          }}> Level 4: Cat - Not yet Unlocked - Complete Level 3 first</h2>
          <Row className ="m-3">
            <Col>
            <CardButtonDisabled
            image ={cat1}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={cat2}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={cat3}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={cat4}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={cat5}/>
            </Col>
          </Row>

          <p className = "text-center"> _______________________________________________________________________________________________________ </p>
          <h2 className = "text-center m-4" style={{
            color: "#696969"
          }}> Level 5: Dog - Not yet Unlocked - Complete Level 4 first </h2>
          <Row>
            <Col>
            <CardButtonDisabled
            image ={dog1}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={dog2}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={dog3}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={dog4}/>
            </Col>
            <Col>
            <CardButtonDisabled 
            image ={dog5}/>
            </Col>
          </Row>
          <br />
        </Container>
        
        <MDBFooter
          style={{
            backgroundColor: "#18AEEA",
            padding: "5px 0px",
            color: "#ffffff",
            textAlign: "center",
            clear: "both",
            // marginTop:"10px",
            position: "absolute",
            width: "100%"
          }}
        >

        <div className="footer-copyright text-center">© 2019 Copyright</div>
        </MDBFooter>
      </div>
    );
  }
}
export default Pet;
