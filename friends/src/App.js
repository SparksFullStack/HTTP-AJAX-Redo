import React, { Component } from 'react';
import axios from "axios";
import { Route } from "react-router-dom";
import './App.css';

import Friends from "./components/Friends/Friends";
import AddFriend from "./components/AddFriend/AddFriend"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      friends: [],
      friendId: 6,
    }
  }

  componentWillMount(){
    axios.get("http://localhost:5000/friends")
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch(err => {throw err});
  }

  handlePost = (newName, newAge, newEmail) => {
    let newId = this.state.friendId + 1;
    axios.post("http://localhost:5000/friends", {
        name: newName,
        age: newAge,
        email: newEmail,
        id: newId,
    })
    .then(res => {
      console.log(res);
      this.setState({
        friends: res.data,
        friendId: newId,
      })
    })
    .catch(err => {throw err});
  }

  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => {
          return (
            <div className="App__main">
              <Friends friendsData={this.state.friends} />
              <AddFriend handlePost={this.handlePost} />
            </div>
          ) 
        }} />
      </div>
    );
  }
}

export default App;
