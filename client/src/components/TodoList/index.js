import React, { Component } from "react";
import { setTime } from "../../utils/helpers";
import DeleteBtn from "../DeleteBtn";
import { Input } from "../Form";

import "./index.css"

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const newItem = this.props.currentItem;

    console.log("---- HAHA ------- onSubmit this")
    console.log(this)
    console.log("---- HAHA ------- onSubmit newItem")
    console.log(newItem)
    console.log("---- HAHA ------- onSubmit this.props")
    console.log(this.props)

    if (newItem) {
      this.props.addItem({
        user: "User 1",
        name: newItem.text
        });
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <Input
          value={this.props.currentItem.text}
          onChange={this.props.handleInput}
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }
}


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    console.log("------ HAHA --------- this.props --- onclick close--")
    console.log(this.props)
    console.log("------ HAHA --------- this.props.item --- onclick close--")
    console.log(this.props.item)

    this.props.removeItem(this.props.item._id);
  }
  onClickDone() {
    console.log("------ HAHA ------- onclickDone")
    console.log(this.props)
    console.log("------ HAHA ------- onclickDone this.props.item")
    console.log(this.props.item)
    console.log(this.props.item._id)

    this.props.markTodoDone(this.props.item);

  }

  render () {
    let todoClass = this.props.item.isComplete ?
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="fas fa-check" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.name}
          <br/> created at: {setTime(this.props.item.dateCreated)}
          <DeleteBtn type="button" className="close" onClick={this.onClickClose}/>
        </div>
      </li>
    );
  }
}


class TodoList extends Component {
  render () {
    let items = this.props.items.map((item, idx) => {
      return (
        <TodoItem key={idx} item={item} inputElement={this.props.inputElement}
          removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

// export default TodoList;

export { TodoList, TodoForm };
