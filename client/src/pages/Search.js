import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import BookContainer from "../components/BookContainer";

class Search extends Component {

  constructor(props) {
    super(props);

    // Bind methods to "Search" component for accessibility
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
          books: booksList,
          query: query
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
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Book Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search Term"
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>

          <Col size="md-12">
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-dark text-white">
                <h3><strong>Results</strong></h3>
              </Card.Header>
              <Card.Body>
                {this.state.books.length ? (
                  <BookContainer
                    books={this.state.books}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                ) : (
                  <h3 className="text-center">Search for a Book to See Results...</h3>
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
