import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Posts from "./mock/Posts";
import Timeline from "./components/Timeline";
import Submission from "./components/addPost";
import ViewPost from "./components/ViewPost";
import "./App.css";

class App extends Component {
  state = {
    Posts: [...Posts],
    selected: 1,
  };

  addPost = (newPost) => {
    newPost.id = this.state.Posts.length + 1;
    this.setState({
      ...this.state,
      Posts: [...this.state.Posts, newPost],
    });
  };

  handleSelect = (id) => {
    this.setState({
      ...this.state,
      selected: id,
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
              <Timeline Posts={this.state.Posts} onSelect={this.handleSelect} />
            </Route>
            <Route path="/addPost">
              <Submission addPost={this.addPost} />
            </Route>
            <Route path="/viewPost/:id">
              <ViewPost course={this.state.Posts[this.state.selected - 1]} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
