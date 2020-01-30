import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));



serviceWorker.unregister();

//STATE AND LIFECYCLE

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return <div>It is {this.state.date.toLocaleTimeString()}</div>;
//   }
// }
// ReactDOM.render(<Clock />, document.getElementById("root"));

//CONDITIONAL RENDERING
// import React from "react";
// import ReactDOM from "react-dom"


// function UserGreeting(props) {
//   return (
//       <div>
//           Welcome Chessah!
//       </div>
//   );
// }

// function GuestGreeting(props) {
//   return(
//       <div>
//           Bye Chessah
//       </div>
//   )
// }

// function Greeting(props){
//     const loggedIn=props.loggedIn
//     if(loggedIn){
//         return <UserGreeting/>
//     }
//     return <GuestGreeting/>
// }

// ReactDOM.render(<Greeting loggedIn={false}/>, document.getElementById("root"))