import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookContainer from "../components/BookContainer";

class Search extends Component {
  constructor(props) {
    super(props);

    // Bind methods to "Saved" component for accessibility
    this.loadBooks = this.loadBooks.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      books: [],
      action: "delete",
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    API.getSavedBooks()
      .then((res) => {
        const booksList = res.data;
        console.log("------ BOOK LIST BELOW")
        console.log(booksList)
        this.setState({
          books: booksList
        });
      })
      .catch((err) => console.log(err));
  }

  handleBookAction(book) {
    API.deleteBook(book)
      .then(() => this.loadBooks())
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-dark text-white">
                <h3><strong>Saved Books</strong></h3>
              </Card.Header>
              <Card.Body>
                {this.state.books.length ? (
                  <BookContainer
                    books={this.state.books}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                ) : (
                  <h3 className="text-center">No Saved Books yet...</h3>
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
