import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import { Image } from "../components/Images";
import flower from "../images/ppfinal.jpg";

class Pet extends Component {
  myfunction() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div className="Pet">
        <Container fluid>
          <Row>
            <Col size="md-3">
              <button>
                <img src={flower} alt="Flower" onClick={this.myfunction} />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Pet;
