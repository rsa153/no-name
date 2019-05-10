import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import API from "../utils/API";
import Header from "../components/Header";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";


class Home extends Component {
  state = {
    group: {},
    members: []
  };
  // When this component mounts, grab the group with the _id of this.props.match.params.id
  // e.g. localhost:3000/groups/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getGroup(this.props.match.params.id)
  //     .then(res => {

  //       console.log("------- res.data GROUP HERE -----");
  //       console.log(res.data);
  //       console.log("------- res.data.members MEMBERS HERE -----");
  //       console.log(res.data.members);

  //       this.setState({
  //         group: res.data,
  //         members: res.data.members
  //         })
  //       })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Header
            title={`Home Title`}
            subtitle={`This is Home subtile`}
          />

          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>{this.state.group.description}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Members</h1>
              <List>
                {this.state.members.map((member)  => (
                  <ListItem key={member._id}>
                    <Link to={"/members/" + member._id}>
                      <strong>{member.email}</strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMember(member._id)} />
                  </ListItem>
                ))}
              </List>
            </article>
          </Col>
        </Row>


        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
