import React, { Component } from "react";
import Calendar from 'react-calendar';
// import Card from 'react-bootstrap/Card';
import API from "../utils/API";
// import { setDate, setDateMongo } from "../utils/helpers";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import { TodoForm, TodoListCard } from "../components/TodoList";
import Header from "../components/Header";

const moment = require('moment')

class Task extends Component {

  constructor(props) {
    super(props)

    // Bind methods to "CreateGroup"
    this.loadTodosPerDate = this.loadTodosPerDate.bind(this);
    this.loadTodosByDate = this.loadTodosByDate.bind(this);
    this.loadTodosByDateWeekly = this.loadTodosByDateWeekly.bind(this);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);

    this.state = {
      user: "",
      todos: [],
      currentItem: { text: "", date: "" },
      today: new Date(),
      date: new Date(),
      dailyPercentComplete: 0,
    };
  }

  componentDidMount() {
    this.loadTodosByDateWeekly(this.state.today);
  }

  loadTodosPerDate(date) {
    // load todos for selected date in calendar
    console.log("------- loadTodosPerDate -------")
    const query = {
      dateDue: {
        "$gte": moment(date).startOf('day').toDate(),
        "$lte": moment(date).endOf('day').toDate()
      },
    };
    API.getTasksByDate(query)
      .then((res) => {
        const todoItems = res.data;
        this.setState({
          todos: todoItems,
        });
      })
      .catch((err) => console.log(err));
  }

  loadTodosByDateWeekly(date) {
    // load todos for selected date in calendar
    console.log("------- loadTodosByDateWeekly -------")
    const query = {
      dateDue: {
        "$gte": moment(date).subtract(3, 'days').startOf('day').toDate(),
        "$lte": moment(date).add(3, 'days').endOf('day').toDate()
      },
    };
    API.getTasksPerWeek(query)
      .then((res) => {
        const todoItems = res.data;
        this.setState({
          todos: todoItems,
        });
      })
      .catch((err) => console.log(err));
  }

  loadTodosByDate() {
    // load all todos group by date
    API.getTasksGroupByDate()
      .then((res) => {
        const todoItems = res.data;
        this.setState({
          todos: todoItems,
        });
      })
      .catch((err) => console.log(err));
  }

  // getDailyPercentComplete() {
  //   // get daily percent complete for future development
  //   API.getTasksGroupByDate()
  //     .then((res) => {
  //       const todoItems = res.data;
  //       this.setState({
  //         dailyPercentComplete: 0,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  addItem(todoItem) {
    console.log("---- add item -----")

    API.saveTask(todoItem)
      .then(() => {
        this.loadTodosPerDate(this.state.date);
        this.setState({
          currentItem: { text: "" }
        });
      })
      .catch((err) => console.log(err));
  }

  removeItem(todoItem) {
    console.log("----- remove item ------")
    API.deleteTask(todoItem)
      .then(() => {
        this.loadTodosByDateWeekly(this.state.today)
      })
      .catch((err) => console.log(err));
  }

  markTodoDone(todoItem) {
    console.log("----- markTodoDone ----")
    const itemId = todoItem._id
    const currentIsComplete = todoItem.isComplete
    const taskData = {
      isComplete: !currentIsComplete
    }
    const dateDiff = moment(this.state.today).diff(moment(todoItem.dateDue), "days")

    if (dateDiff === 0) {
      // Only able to mark todo complete for today's date
      API.updateTask(itemId, taskData)
        .then(() => {
          this.loadTodosByDateWeekly(this.state.today)
        })
        .catch((err) => console.log(err));
    } else {
      // ----- todo update this to not use alert?
      alert(" Can only mark todo complete for today's date... ")
    }

  }

  onDateChange(date) {
    console.log("----- onDateChange ------")
    this.loadTodosPerDate(date)
    this.setState({
      date
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTodoInputChange = event => {
    const itemText = event.target.value
    const currentItem = {
      user: this.state.user,
      text: itemText,
      dateDue: this.state.date,
      dateCreated: this.state.today
    }
    this.setState({
      currentItem,
    })
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
              <FormBtn
                onClick={this.loadTodosByDate}
              >
                All Todos
              </FormBtn>

              <FormBtn
                onClick={this.loadTodosByDateWeekly}
              >
                This Week Todos
              </FormBtn>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-3">
            <Calendar
              onChange={this.onDateChange}
              value={this.state.date}
            />

          </Col>

          <Col size="md-9">
            {this.state.todos.length ? (
              <Row>
              {this.state.todos.map((items, idx) => (
                <Col size="md-4">
                  <TodoListCard
                    todoDate={items._id}
                    monthAdjust={true}
                    items={items.tasks}
                    removeItem={this.removeItem}
                    markTodoDone={this.markTodoDone}
                  />
                </Col>
              ))}
              </Row>
            ) : (
              <Row>
              <Col size="md-4">
                <TodoListCard
                  todoDate={this.state.date}
                  items={this.state.todos}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                  notodos={`No Todos`}
                />
              </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Task;
