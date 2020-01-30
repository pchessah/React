import React from "react";
import ReactDOM from "react-dom"


function UserGreeting(props) {
  return (
      <div>
          Welcome Chessah!
      </div>
  );
}

function GuestGreeting(props) {
  return(
      <div>
          Bye Chessah
      </div>
  )
}

function Greeting(props){
    const loggedIn=props.loggedIn
    if(loggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

ReactDOM.render(<Greeting loggedIn={false}/>, document.getElementById("root"))

//Copy contents to index.js to run
