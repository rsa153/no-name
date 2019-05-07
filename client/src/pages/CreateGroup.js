import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, TextArea } from "../components/Form";
import GroupContainer from "../components/GroupContainer";
import Header from "../components/Header";

class CreateGroup extends Component {

  constructor(props) {
    super(props)

    // Bind methods to "CreateGroup"
    this.loadGroups = this.loadGroups.bind(this);
    this.handleMemberNameChange = this.handleMemberNameChange.bind(this);
    this.handleAddMember = this.handleAddMember.bind(this);
    this.handleRemoveMember = this.handleRemoveMember.bind(this);

    this.handleGroupAction = this.handleGroupAction.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelCreateGroup = this.cancelCreateGroup.bind(this);

    this.state = {
      groups: [],
      owner: "",
      name: "",
      description: "",
      members: [{email: ""}],
      action: "delete"
    };
  }

  componentDidMount() {
    this.loadGroups();
  }

  loadGroups() {
    API.getGroups()
      .then((res) => {
        const groupsList = res.data;
        console.log("------ GROUPS LIST BELOW")
        console.log(groupsList)
        console.log("------ GROUP 1 MEMBERS BELOW")
        console.log(groupsList[0].members)
        console.log("------ members also array -___- ")
        console.log(groupsList[0].members[0])
        console.log("------ members email")
        console.log(groupsList[0].members[0].email)
        this.setState({
          groups: groupsList
        });
      })
      .catch((err) => console.log(err));
  }

  handleGroupAction(group) {
    API.deleteGroup(group)
      .then(() => this.loadGroups())
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleMemberNameChange = idx => event => {
    const newMembers = this.state.members.map((member, sidx) => {
      if (idx !== sidx) return member;
      return {
        ...member,
        email: event.target.value,
      };
    });

    this.setState({
      members: newMembers
    });
  };

  handleAddMember = () => {
    this.setState({
      members: this.state.members.concat([{
        email: ""
      }])
    });
  };

  handleRemoveMember = idx => () => {
    this.setState({
      members: this.state.members.filter((s, sidx) => idx !== sidx)
    });
  };

  cancelCreateGroup = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: ""
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, members } = this.state;

    console.log(email, members);
    console.log(" ---- SUBMIT FORM ------ HAHA -----");


    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      API.saveGroup({
        // owner: this.state.user,
        owner: "USER 1",
        name: this.state.name,
        description: this.state.description,
        members: this.state.members
      })
        .then(res => this.loadGroups())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Header
          title={`Create Group Title`}
          subtitle={`Create Group subtile`}
        />

        <Row>
          <Col size="md-10">
            <form>
              <Input
                label="Name"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Group Name"
              />
              <TextArea
                label="Description"
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Group Description"
              />


              {this.state.members.map((member, idx) => (
                <div className="member">
                  <input
                    type="text"
                    placeholder={`member#${idx + 1}@gmail.com`}
                    value={member.email}
                    onChange={this.handleMemberNameChange(idx)}
                  />
                  <button
                    type="button"
                    onClick={this.handleRemoveMember(idx)}
                    className="small"
                  >
                    -
                  </button>
                  {/* <DeleteBtn onClick={this.handleRemoveMember(idx)} /> */}

                </div>
              ))}


              <FormBtn
                disabled={!(this.state.name) || !(this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Create Group
              </FormBtn>

              <FormBtn
                onClick={this.cancelCreateGroup}
              >
                Cancel
              </FormBtn>

              <FormBtn
                type="button"
                onClick={this.handleAddMember}
                className="small"
              >
                Add Member
              </FormBtn>

            </form>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-dark text-white">
                <h3><strong>Your Groups</strong></h3>
              </Card.Header>
              <Card.Body>
                {this.state.groups.length ? (
                  <GroupContainer
                    groups={this.state.groups}
                    handleGroupAction={this.handleGroupAction}
                    action={this.state.action}
                  />
                ) : (
                  <h3 className="text-center">Let's Create or Join a Group!</h3>
                )}
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default CreateGroup;
