import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { setTime, setDateMongo } from "../../utils/helpers";


class DailyProgress extends Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
    this.state = {
      color: "active",
    };
  }

  setColor() {
    if ( this.props.percent > 20 && this.props.percent < 60 ) {
      this.setState({
        color: "active",
      });
    } else if (this.props.percent > 61 && this.props.percent < 90) {
      this.setState({
        color: "default",
      });
    } else if (this.props.percent < 20) {
      this.setState({
        color: "error",
      });
    }
    console.log("------ HAHA --------- this.props --- onclick close--")
    console.log(this.props)
    console.log("------ HAHA --------- this.props.item --- onclick close--")
    console.log(this.props.item)

    this.props.removeItem(this.props.item._id);
  }

  render () {
    return (
      <div>

        <h5> Daily Percent Complete of {setTime(this.props.today)}</h5>

        <ProgressBar now={this.props.percent} label={`${this.props.percent}%`} />

        <Progress
          percent={this.props.percent}
          status={this.props.color}
          theme = {
          {
            error: {
              symbol: this.props.percent + '%',
              trailColor: 'pink',
              color: 'red'
            },
            default: {
              symbol: this.props.percent + '%',
              trailColor: 'lightblue',
              color: 'blue'
            },
            active: {
              symbol: this.props.percent + '%',
              trailColor: 'yellow',
              color: 'orange'
            },
            success: {
              symbol: this.props.percent + '%',
              trailColor: 'lime',
              color: 'green'
            }
          }}
        />

      </div>
    );
  }
}



export { DailyProgress };
