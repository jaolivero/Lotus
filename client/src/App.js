import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Posts from "./mock/Posts";
import Timeline from "./components/Timeline";
import Submission from "./components/addPost";
import ViewPost from "./components/ViewPost";
import Alert from './components/common/Alert';
import "./App.css";

const App = (props) => {
// class App extends Component {
  // state = {
  //   Posts: [...Posts],
  //   selected: 1,
  // };

  // addPost = (newPost) => {
  //   newPost.id = this.state.Posts.length + 1;
  //   this.setState({
  //     ...this.state,
  //     Posts: [...this.state.Posts, newPost],
  //   });
  // };

  // handleSelect = (id) => {
  //   this.setState({
  //     ...this.state,
  //     selected: id,
  //   });
  // };
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" />
            <Route path="/login" component={Login} />
            <Route exact path="/timeline">
              <Timeline />
            </Route>
            <Route path="/submit">
              <Submission />
            </Route>
            <Route path="/viewPost/:id">
              <ViewPost />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
