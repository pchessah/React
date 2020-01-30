import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>State LifeCycle</h1>It is {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"));

//transfer filr to index.js to work
