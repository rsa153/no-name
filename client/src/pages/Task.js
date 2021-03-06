import React, { Component } from "react";
import Calendar from 'react-calendar';
// import Card from 'react-bootstrap/Card';
import API from "../utils/API";
import ReactModal from "react-modal";
// import { setDate, setDateMongo } from "../utils/helpers";
// import { Col, Row, Container } from "../components/Grid";
import { Container } from "../components/Grid";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FormBtn } from "../components/Form";
import { TodoForm, TodoListCard } from "../components/TodoList";
import { DailyProgress } from "../components/User";
import Header from "../components/Header";
import NavbarPage from "../components/Nav";
import celebration from '../images/celebration.png';
import image from '../images/Grow/sflower1.jpg';
import { FormHelperText } from "@material-ui/core";
const moment = require('moment')

class Task extends Component {

  constructor(props) {
    super(props)

    // Bind methods to "CreateGroup"
    this.loadTodosPerDate = this.loadTodosPerDate.bind(this);
    this.loadTodosByDate = this.loadTodosByDate.bind(this);
    this.loadTodosByDateWeekly = this.loadTodosByDateWeekly.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.loadCurrentPet = this.loadCurrentPet.bind(this);

    this.getDailyPercentComplete = this.getDailyPercentComplete.bind(this);
    this.updateTodos = this.updateTodos.bind(this);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);

    this.handleOpenTasksCompletionModal = this.handleOpenTasksCompletionModal.bind(this);
    this.handleCloseTasksCompletionModal = this.handleCloseTasksCompletionModal.bind(this);

    this.state = {
      userName: "",
      userID: "",
      todos: [],
      currentItem: { text: "", date: "" },
      today: new Date(),
      date: new Date(),
      currentPet: "",
      dailyPercentComplete: 0,
      progressColor: "default",
      view: "week",
      showTasksCompletionModal: false
    };
  }

  componentDidMount() {
    this.getDailyPercentComplete(this.state.today);
    this.loadTodosByDateWeekly(this.state.today);
    // this.loadCurrentUser();
    this.loadCurrentPet();
  }

  handleOpenTasksCompletionModal () {
    this.setState({ showTasksCompletionModal: true });
  }

  handleCloseTasksCompletionModal () {
    var src = "";

    if(this.state.currentPet == "stage1.jpg")
    {
      src = "stage2.jpg";
    }
    else if(this.state.currentPet == "stage2.jpg")
    {
      src = "stage3.jpg";
    }
    else if(this.state.currentPet == "stage3.jpg")
    {
      src = "stage4.jpg";
    }
    else
    {
      src = "sflower3.jpg";
    }

    var petURL = require('../images/Grow/' + src);

    this.setState({ showTasksCompletionModal: false, currentPet: petURL });
  }

  loadCurrentUser() {
    API.getSession()
      .then((res) => {
        var splitSessionData = res.data.session.split('"');

        this.setState({
          userID: splitSessionData[19]
        });
        console.log(splitSessionData[19]);

        API.getUserInfo(splitSessionData[19])
          .then((res) => {
            var splitSessionData = res.data.session.split('"');

            this.setState({
              userID: splitSessionData[19]
            });
          })
          .catch((err) => console.log(err));

      })
      .catch((err) => console.log(err));


      // this.setState({
        //   user: res.data.name,
        //   lastLogin: res.data.lastLogin
        // });

        // var date1;
        // var date2;
        // date1 = this.state.today;
        // date2 = new Date(this.state.lastLogin);
        // var res = Math.abs(date1 - date2) / 1000;
        // var days = Math.floor(res / 86400);
        // console.log("Difference: "+days);
        // this.setState({
        //   daysDifference: days
        // });
  }

  loadCurrentPet() {
    console.log("STATE INFO");
    console.log(this.state);
    API.getPet()
      .then((res) => {
        console.log(" ---- loadCurrentPet---")
        console.log(res.data)

        const petURL = require('../images/Grow/' + res.data.url);

        this.setState({
          currentPet: petURL
        });
      })
      .catch((err) => console.log(err));
  }

  loadTodosPerDate(date) {
    // load todos for selected date in calendar
    console.log("------- loadTodosPerDate -------")
    let query = {
      dateDue: {
        "$gte": moment(date).startOf('day').toDate(),
        "$lte": moment(date).endOf('day').toDate()
      },
    };

    if (!date) {
      query = {
        dateDue: {
          "$gte": moment(this.state.date).startOf('day').toDate(),
          "$lte": moment(this.state.date).endOf('day').toDate()
        },
      };
    }

    API.getTasksByDate(query)
      .then((res) => {
        const todoItems = res.data;
        this.setState({
          todos: todoItems,
          view: "day"
        });
      })
      .catch((err) => console.log(err));
  }

  loadTodosByDateWeekly(date) {
    // load todos for selected date in calendar
    console.log("------- loadTodosByDateWeekly -------")
    if (!date) {
      date = this.state.today
    }

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
          view: "week"
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
          view: "all"
        });
      })
      .catch((err) => console.log(err));
  }

  getDailyPercentComplete(date) {
    // get daily percent complete for future development
    console.log("------- getDailyPercentComplete -------")
    const query = {
      dateDue: {
        "$gte": moment(date).startOf('day').toDate(),
        "$lte": moment(date).endOf('day').toDate()
      },
    };
    API.getTasksByDate(query)
      .then((res) => {
        const todoItems = res.data;
        console.log("------- getTasksByDate -------")
        console.log(todoItems)
        console.log(todoItems[0].countComplete)
        console.log(todoItems[0].countTasks)

        const dailyTask = todoItems[0]

        let percentComplete = (dailyTask.countComplete / dailyTask.countTasks) * 100
        percentComplete = percentComplete.toFixed(2)

        console.log("------- daily percentComplete -------")
        console.log(percentComplete)

        // Set color for progress bar
        let color = "active";
        if (percentComplete <= 20) {
          color = "error";
        } else if (percentComplete > 20 && percentComplete < 50) {
          color = "active";
        } else if (percentComplete > 55 && percentComplete < 90) {
          color = "default";
        }
        else if(percentComplete == 100)
        {
          this.handleOpenTasksCompletionModal();
        }
        console.log(color)

        this.setState({
          dailyPercentComplete: percentComplete,
          progressColor: color,
        });
      })
      .catch((err) => console.log(err));
  }


  updateTodos() {
    this.getDailyPercentComplete(this.state.today)

    if (this.state.view === "week") {
      this.loadTodosByDateWeekly(this.state.today);
    } else if (this.state.view === "day") {
      this.loadTodosPerDate(this.state.date);
    }
  }

  addItem(todoItem) {
    console.log("---- add item -----")
    API.saveTask(todoItem)
      .then(() => {
        this.updateTodos()

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
        this.updateTodos()
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
          this.updateTodos()
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

    // Future development: customize timezone
    // Assume Chicago area for now
    // Mongodb stores in utc by default, adjust utcOffset
    const dateDueUtcOffset = moment(this.state.date).endOf('day').subtract(5, 'hours').format()
    const itemText = event.target.value
    const currentItem = {
      user: this.state.user,
      text: itemText,
      dateDue: dateDueUtcOffset,
      dateCreated: this.state.today
    }
    this.setState({
      currentItem,
    })
  };

  render() {
    return (
        <div className="Pet" style={{
        background: "#FAF0BA",
        minHeight: "100vh",
        resizeMode: 'cover',
      }}>
          <NavbarPage />


      <Container fluid>


        <Header
          title={`Create and Complete Your Tasks`}
        />
        <Col md={{ span: 10, offset: 1 }}>

        <h5 className="mt-0">To Add a Task, click on the date in your calendar,
          type in your task and click Add Task.
          To complete your task, click on the checkmark next to it.</h5>
        <br />
        </Col>

        <Row>
          <Col md={{ span: 8, offset: 1 }}>
            <div id="main" className="center mb-3">
              <DailyProgress today={this.state.today}
                color={this.state.progressColor} percent={this.state.dailyPercentComplete}/>
            </div>
          </Col>
        </Row>

        <Row>

          {/* <Col size="md-3"> */}
          {/* <Col md={3}> */}
          <Col md={{ span: 2, offset: 1 }}>
            <div><img width="200px" height="3000px" src={this.state.currentPet} alt="TEST"/></div>
            <br />
          </Col>


          {/* <Col size="md-5"> */}
          {/* <Col md={4}> */}
          <Col md={{ span: 4, offset: 1 }}>

            <Calendar
              onChange={this.onDateChange}
              value={this.state.date}
            />
          </Col>

          {/* <Col size="md-4"> */}
          <Col md={3}>
            <div id="main" className="center">
              <TodoForm addItem={this.addItem} inputElement={this.inputElement}
                currentItem={this.state.currentItem} handleInput={this.handleTodoInputChange}
                />
            </div>

            <div id="main" className="center">
              <br />
              <br />
              <FormBtn
                onClick={this.loadTodosByDateWeekly}
              >
                This Week Todos
              </FormBtn>
              <br />
              <br />
              <FormBtn
                onClick={this.loadTodosPerDate}
              >
                Today's Todos
              </FormBtn>
              <br />
              <br />
              <FormBtn
              onClick={this.loadTodosByDate}
              styles ={{
                margingright: "10px"
              }}
              >
                All Todos
              </FormBtn>
            </div>
          </Col>
        </Row>
<br />
        <Row>
          {/* <Col size="md-9"> */}
          {/* <Col md={9}> */}
          <Col md={{ span: 9, offset: 1 }}>

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
              {/* <Col size="md-4"> */}
              <Col md={4}>
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

        <ReactModal
            isOpen={this.state.showTasksCompletionModal}
            contentLabel="Congrats! You finished your daily tasks!"
          >
             <button onClick={this.handleCloseTasksCompletionModal}
            style = {{
              color: "#0B92C8",
              fontWeight: "bolder"
            }}>
              X</button>
              <h1 className="text-center" style={{ color: "#0B92C8" }}>
              Congrats! You finished your tasks for the day!</h1>

              <img src={celebration} alt="celebration" style={{
              width:"400px", /* This value will depend on what size you want for your loading image, let's say it's 50px */
              height: "400px",
              position: "absolute",
              left: "35%",
              top: "35%"
              }}/>
              <br />
              <h3 className="text-center" style={{ color: "#0B92C8" }}>
              Please press the X button in the upper left corner to get back to writing and completing more tasks</h3>
        </ReactModal>
      </div>
    );
  }
}

export default Task;
