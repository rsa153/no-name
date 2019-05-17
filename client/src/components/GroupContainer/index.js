import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";
import { List, ListItem } from "../List";



function GroupContainer(props) {
  return (
    <ListGroup as="ul">
      {props.groups.map((group) => (
        <ListGroup.Item as="li" key={group._id}>
          <Row>
            <Col md={8}>
              <h3>{group.name}</h3>
              <h5>Owner: {group.owner}</h5>
            </Col>
            <Col md={4}>
              <div className="btn-container">
                <Button
                  as="a"
                  variant="secondary"
                  href={"/groups/" + group._id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow"
                >
                  View
                </Button>

                {props.action === 'delete' && (
                  <Button
                    onClick={() => props.handleGroupAction(group._id)}
                    variant="danger"
                    className="ml-2 shadow"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              {/* <p>Members:
              {group.members.map((member) => (
                <span> {member.email.join(', ')} | </span>
              ))}
              </p> */}

              <h5><strong>Members: </strong></h5>

              {/* Todo: add members or users api? decide on db models */}

              <List>
                {group.members.map((member)  => (
                  <ListItem key={member._id}>
                    <Link to={"/members/" + member._id}>
                      <strong>{member.email}</strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMember(member._id)} />
                  </ListItem>
                ))}
              </List>

            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={4} md={2}>
              {/* {book.subtitle !== undefined && book.subtitle.length > 0 && (
                  <h5>{group.owner}</h5>
              )} */}
              {(group.image !== undefined) ? (
                <img
                  src={group.image}
                  alt={group.name}
                  className="img-thumbnail img-fluid w-100"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/300x280?text=Group+Image+Here"
                  alt="group image"
                  className="img-thumbnail img-fluid w-100"
                />
              )}
            </Col>
            <Col xs={12} sm={8} md={10}>
              <p>Description: {group.description}</p>
            </Col>
          </Row>

        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default GroupContainer;