import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MediaCard from "../components/Card";
import image from "../images/homeflower.jpg";
import checklist from "../images/checklist.png";
import animals from "../images/Animals.jpg";
import grow from "../images/grow.jpg";
import { MDBFooter } from "mdbreact";

class Home extends Component {
  state = {
    group: {},
    members: []
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#FAF0BA",
          minHeight: "100%",
          resizeMode: 'cover',
        }}
      >

        <Jumbotron />

        <Row>
          <Col size="md-3">
            <MediaCard
              image={image}
              name="Choose Your Pet! "
              description="Start with a flower. Select your favorite. Make it grow, help it survive!"
            />
          </Col>

          <Col size="md-3">
            <MediaCard
              image={checklist}
              name="Create your daily tasks!"
              description="Input your daily tasks, track your progress, check them off when they're complete."
            />
          </Col>

          <Col size="md-3">
            <MediaCard
              image={grow}
              name="Grow Your Pet!"
              description="Finish your daily tasks and make your flower grow. Fail your tasks and your flower slowly dies."
            />
          </Col>

          <Col size="md-3">
            <MediaCard
              image={animals}
              name="Unlock more difficult pets!"
              description="If your flower survives, then you know you're awesome and can upgrade to more difficult pets: Fishes, Birds, Cats, Dogs, and many more."
            />
          </Col>
        </Row>
        <br />
        <MDBFooter
          style={{
            backgroundColor: "#18AEEA",
            padding: "5px 0px",
            color: "#ffffff",
            textAlign: "center",
            clear: "both",
            marginTop:"10px",
            position: "absolute",
            // bottom: "0",
            width: "100%"

          }}
        >
        
          <div className="footer-copyright text-center">© 2019 Copyright</div>
        </MDBFooter>
        <br />

        {/* </Container> */}
      </div>

      // {/* </MediaCard> */}
      // {/* <Grid container spacing={32}>

      //   <Grid item md={3}>
      //     <Card>
      //       <Header title={`Home Title`} subtitle={`This is Home subtile`} />
      //     </Card>
      //   </Grid>

      //   <Grid item md={3}>
      //     <Header title={`Home Title`} subtitle={`This is Home subtile`} />
      //   </Grid>
      // </Grid> */}
      // {/* <div>
      // <Row>
      // <Card>
      //   <Col size="md-3 pl-2">
      //   <Header
      //     title={`Home Title`}
      //     subtitle={`This is Home subtile`}
      //   />
      //   </Col>
      //   </Card>
      //   <Card>
      //   <Col size="md-3">
      //   <Header
      //     title={`Home Title`}
      //     subtitle={`This is Home subtile`}
      //   />
      //   </Col>
      //   </Card>
      //   <Card>
      //   <Col size="md-3">
      //   <Header
      //     title={`Home Title`}
      //     subtitle={`This is Home subtile`}
      //   />
      //   </Col>
      //   </Card>
      // </Row>
      // </div>
      // <Row>
      //   <Col size="md-10 md-offset-1">
      //     <article>
      //       <h1>Members</h1>
      //       <List>
      //         {this.state.members.map((member)  => (
      //           <ListItem key={member._id}>
      //             <Link to={"/members/" + member._id}>
      //               <strong>{member.email}</strong>
      //             </Link>
      //             <DeleteBtn onClick={() => this.deleteMember(member._id)} />
      //           </ListItem>
      //         ))}
      //       </List>
      //     </article>
      //   </Col>
      // </Row>

      // <Row>
      //   <Col size="md-2">
      //     <Link to="/">← Back to Home</Link>
      //   </Col>
      // </Row> */}
    );
  }
}

export default Home;
