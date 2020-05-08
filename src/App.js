import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Posts from "./mock/Posts";
import Timeline from "./components/Timeline";
import addPost from "./components/addPost";
import "./App.css";

class App extends Component {
  state = {
    Posts: [...Posts],
  };
  addPost = (newPost) => {
    this.setState({
      Posts: [...this.state.Posts, newPost],
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/timeline">
              <Timeline Posts={this.state.Posts} />
              <addPost />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
