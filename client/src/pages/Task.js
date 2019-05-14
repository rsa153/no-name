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
      user: "user 1",
      todos: [],
      currentItem: { text: "", date: "" },
      today: new Date(),
      date: new Date(),
      dailyPercentComplete: 0,
    };
  }

  componentDidMount() {
    // this.loadTodosPerDate(date);
    // this.loadTodosByDate();
    this.loadTodosByDateWeekly(this.state.today);
  }

  loadTodosPerDate(date) {
    // load todos for selected date in calendar
    console.log("------ HAHA ------- TASKS LIST BELOW -------loadTodosPerDate")
    const query = {
      dateDue: {
        "$gte": moment(date).startOf('day').toDate(),
        "$lte": moment(date).endOf('day').toDate()
      },
    };
    console.log("------ HAHA query below")
    console.log(query)

    API.getTasksByDate(query)
      .then((res) => {
        const todoItems = res.data;
        console.log("------ HAHA ----- getTasksByQuery ------- TASKS LIST BELOW")
        console.log(todoItems)

        this.setState({
          todos: todoItems,
        });
      })
      .catch((err) => console.log(err));
  }

  loadTodosByDateWeekly(date) {
    // load todos for selected date in calendar
    console.log("------ HAHA ------- TASKS LIST BELOW -------loadTodosByDateWeekly")
    const query = {
      dateDue: {
        "$gte": moment(date).subtract(3, 'days').startOf('day').toDate(),
        "$lte": moment(date).add(3, 'days').endOf('day').toDate()
      },
    };
    console.log("------ HAHA query below")
    console.log(query)

    API.getTasksPerWeek(query)
      .then((res) => {
        const todoItems = res.data;
        console.log("------ HAHA ----- getTasksByQuery ------- TASKS LIST BELOW")
        console.log(todoItems)

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
        });
      })
      .catch((err) => console.log(err));
  }

  getDailyPercentComplete() {
    // load todos group by date
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
          dailyPercentComplete: 0,
        });

      })
      .catch((err) => console.log(err));
  }

  addItem(todoItem) {
    console.log("---- HAHA ----- add item -----")
    console.log(todoItem)

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
    API.deleteTask(todoItem)
      .then(() => {
        console.log("----- HAHA remove item ------")
        console.log(todoItem)
        this.loadTodosByDate()
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

    const dateDiff = moment(this.state.today).diff(moment(todoItem.dateDue), "days")
    // today.diff(future) ==> today - future < 0
    // today.diff(past) ==> today - past > 0

    console.log("----- HAHA ----- mark todo done --- meh date diff----")
    console.log(dateDiff)
    console.log(moment(this.state.today))
    console.log(moment(todoItem.dateDue))

    if (dateDiff === 0) {
      // Only able to mark todo complete for today's date
      API.updateTask(itemId, taskData)
        .then(() => {
          console.log("----- HAHA mark todo done ------ updateTask item ------")
          console.log(todoItem)
          this.loadTodosByDate()
        })
        .catch((err) => console.log(err));
    } else {
      // ----- haha ------  update this to not use alert?
      alert("Cannot mark todo complete in the past or future...")
    }

  }

  onDateChange(date) {
    console.log("----- HAHA ------ onchange date")
    console.log(date)
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
    // const { name, value } = event.target;
    // console.log(event.target)
    // console.log("----- HAHA ----- handle input change name")
    // console.log(name)
    // console.log("----- HAHA ----- handle input change value")
    // console.log(value)

    const itemText = event.target.value
    const currentItem = {
      user: this.state.user,
      text: itemText,
      // key: Date.now()
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

            {/*
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
                  {this.state.todosByDate.length ? (
                    <TodoListCard
                      todoDate={this.state.date}
                      monthAdjust={false}
                      items={this.state.todosByDate}
                      removeItem={this.removeItem}
                      markTodoDone={this.markTodoDone}
                    />
                  ) : (
                    <TodoListCard
                      todoDate={this.state.date}
                      items={this.state.todosByDate}
                      removeItem={this.removeItem}
                      markTodoDone={this.markTodoDone}
                      notodos={`No Todos`}
                    />
                  )}
              </Col>
              </Row>
            )} */}



          </Col>

        </Row>

      </Container>
    );
  }
}

export default Task;
