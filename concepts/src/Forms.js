import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", about: "", color: "" };
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAboutChange = event => {
    this.setState({ about: event.target.value });
  };

  handleColorChange = event => {
    this.setState({ color: event.target.value });
  };

  handleSubmit = event => {
    alert(
      `Your Name is ${this.state.name} and you like ${this.state.about}. Your favorite color is ${this.state.color}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What is your name?
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleNameChange}
          />
        </label>
        <br />
        <label>
          What do you like:
          <textarea
            type="text"
            value={this.state.value}
            onChange={this.handleAboutChange}
          />
        </label>
        <br />
        <label>
          what is your favorite fruit?
          <select value={this.state.value} onChange={this.handleColorChange}>
            <option value="orange">
              Orange
            </option>
            <option value="coconut">
              Coconut
            </option>
            <option value="mango">
              Mango
            </option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Forms;
