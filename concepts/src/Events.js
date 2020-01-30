//FOR FUNCTION COMPONENTS


// import React from "react";

// function Events() {
//   function handleClick(e) {
//     e.preventDefault();
//     alert("The button was clicked!");
//   }
//   return <button onClick={handleClick}> Click Here for an Event </button>;
// }

// export default Events;


//For classes

import React, {Component} from 'react'

class Events extends Component{
    constructor(props){
        super(props)
        this.state={toggle: true}
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            state =>({
                toggle: !state.toggle
            })
        )
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.toggle ? "THIS IS ON" : "THIS IS OFF"}
            </button>
        )
    }
}

export default Events

