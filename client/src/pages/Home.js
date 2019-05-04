import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookContainer from "../components/BookContainer";

class Search extends Component {

  constructor(props) {
    super(props);

    // Bind methods to "Home" component for accessibility
    this.searchBooks = this.searchBooks.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      books: [],
      action: "save",
      query: ""
    };
  }

  searchBooks(query) {
    API.searchBooks(query)
      .then((res) => {
        const booksList = res.data.map((b) => {
          return {
            googleId: b.id,
            title: b.volumeInfo.title,
            subtitle: b.volumeInfo.subtitle || '',
            authors: b.volumeInfo.authors,
            description: b.volumeInfo.description,
            image: b.volumeInfo.imageLinks.thumbnail,
            link: b.volumeInfo.infoLink
          };
        });
        this.setState({
          books: booksList
        });
      })
      .catch((err) => console.log(err));
  };

  handleBookAction(book) {
    API.saveBook(book)
      .then(() => this.searchBooks(this.state.query))
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.searchBooks(this.state.query)
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>

          <Col size="md-6 sm-12">
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-dark text-white">
                <h3><strong>Groups</strong></h3>
              </Card.Header>
              <Card.Body>
                {/* display books if exists */}
                {this.state.books.length ? (
                  <BookContainer
                    books={this.state.books}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                ) : (
                  <h3 className="text-center">No Groups yet...</h3>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col size="md-6 sm-12">
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-dark text-white">
                <h3><strong>Events</strong></h3>
              </Card.Header>
              <Card.Body>
                {this.state.books.length ? (
                  <BookContainer
                    books={this.state.books}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                ) : (
                  <h3 className="text-center">No Events yet...</h3>
                )}
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Search;
