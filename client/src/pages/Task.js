import React, { Component } from "react";
import API from "../utils/API";
import { setDate } from "../utils/helpers";
import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from "../components/Grid";
import { TodoList, TodoForm } from "../components/TodoList";
import Header from "../components/Header";

const moment = require('moment')


class Task extends Component {

  constructor(props) {
    super(props)

    // Bind methods to "CreateGroup"
    // this.loadTodos = this.loadTodos.bind(this);
    // this.loadTodosByDate = this.loadTodosByDate.bind(this);

    this.loadTodosGroupByDate = this.loadTodosGroupByDate.bind(this);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      todos: [],
      todosByDate: [{ date: "", todos: [] }],
      currentItem: { text: "", key: "" },
      today: moment(),
    };
  }

  componentDidMount() {
    // this.loadTodos();
    // this.loadTodosByDate();
    this.loadTodosGroupByDate();
  }

  // loadTodos() {
  //   API.getTasks()
  //     .then((res) => {
  //       const todoItems = res.data;
  //       console.log("------ TASKS LIST BELOW")
  //       console.log(todoItems)

  //       this.setState({
  //         todos: todoItems
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  // loadTodosByDate() {
  //   const query = {
  //     dateDue: {
  //       "$gte": moment(this.state.today).startOf('day').toDate(),
  //       "$lte": moment(this.state.today).endOf('day').toDate()
  //     },
  //   };
  //   console.log("------ HAHA query below")
  //   console.log(query)

  //   API.getTasksByQuery(query)
  //     .then((res) => {
  //       const todoItems = res.data;
  //       console.log("------ TASKS LIST BELOW")
  //       console.log(todoItems)

  //       this.setState({
  //         todos: todoItems,
  //         todosByDate: todoItems
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  loadTodosGroupByDate() {
    API.getTasksGroupByDate()
      .then((res) => {
        const todoItems = res.data;

        // console.log("------ TASKS LIST BELOW")
        // console.log(todoItems)

        // console.log("------ TASKS LIST [0] BELOW")
        // console.log(todoItems[0])
        // console.log(todoItems[0]._id)
        // console.log(todoItems[0].tasks)
        // console.log(todoItems[0].tasks[0])
        // console.log(todoItems[0].tasks[0].name)

        this.setState({
          todos: todoItems,
          todosByDate: todoItems
        });
      })
      .catch((err) => console.log(err));
  }

  addItem(todoItem) {
    API.saveTask(todoItem)
      .then(() => {
        this.loadTodosGroupByDate();
        this.setState({
          currentItem: { text: "", key: "" }
        });
      })
      .catch((err) => console.log(err));
  }

  removeItem(todoItem) {
    API.deleteTask(todoItem)
      .then(() => {
        console.log("----- HAHA remove item ------")
        console.log(todoItem)
        this.loadTodosGroupByDate()
      })
      .catch((err) => console.log(err));
  }

  markTodoDone(todoItem) {
    console.log("----- HAHA ----- mark todo done --- todoItem----")
    console.log(todoItem)

    const itemId = todoItem._id
    const currentIsComplete = todoItem.isComplete
    const taskData = {
      isComplete: !currentIsComplete
    }

    API.updateTask(itemId, taskData)
      .then(() => {
        console.log("----- HAHA mark todo done ------ updateTask item ------")
        console.log(todoItem)
        this.loadTodosGroupByDate()
      })
      .catch((err) => console.log(err));

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTodoInputChange = event => {
    // const { name, value } = event.target;
    // console.log(event.target)
    // console.log("----- HAHA ----- handle input change name")
    // console.log(name)
    // console.log("----- HAHA ----- handle input change value")
    // console.log(value)

    const itemText = event.target.value
    const currentItem = {
      text: itemText,
      key: Date.now()
    }

    this.setState({
      currentItem,
    })

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
          title={`Create ToDos`}
          subtitle={`Create ToDos subtitle`}
        />

        <Row>
          <Col size="md-10">
            <div id="main" className="center">
              <TodoForm addItem={this.addItem} inputElement={this.inputElement}
                currentItem={this.state.currentItem} handleInput={this.handleTodoInputChange}
                />
            </div>
          </Col>
        </Row>

        <Row>
          {this.state.todos.map((items, idx) => (
            <Col size="md-4">
              <Card className="mt-4 shadow">
                <Card.Header className="border-bottom-0 bg-dark text-white">
                  <h3><strong>Daily Task - Date: {setDate(items._id)}</strong></h3>
                </Card.Header>

                <Card.Body>
                  <TodoList items={items.tasks} removeItem={this.removeItem}
                    markTodoDone={this.markTodoDone}/>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Task;
