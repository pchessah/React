import React, { Component } from 'react'

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

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LogInControl extends Component{
    constructor(props){
        super(props)
        this.state = {loggedIn: true}

        // this.handleLoginClick=this.handleLoginClick.bind(this)
        // this.handleLogoutClick=this.handleLogoutClick.bind(this)
        
    }

    handleLoginClick=()=>{
        this.setState({loggedIn: true})
    }

    handleLogoutClick=()=>{
        this.setState({loggedIn: false})
    }

    render(){
        const loggedIn=this.state.loggedIn
        let button

        if(loggedIn){
            button = <LogoutButton onClick = {this.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick = {this.handleLoginClick}/>
        }

        return(
            <div>
                <Greeting loggedIn = {loggedIn}/>
                {button}
            </div>
        )
    }
}

export default LogInControl