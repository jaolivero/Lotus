import React, { Component } from "react";
import Button from "./common/Button";
import { connect } from "react-redux";
import { changeForm, submitForm } from "../actions";

const addPost = (props) => {
// class Submission extends Component {
//   state = {
//     id: 0,
//     title: "",
//     summary: "",
//     game: "",
//     video: "",
//     likes: 0,
//     comments: [],
//   };

//   handleChange = (e) => {
//     this.props.changeForm(e.target.id, e.target.value);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.submitForm(this.props.newResource.form);
//   };

  const { form } = props.newPost;
  const handleChange = (e) => {
    props.changeForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // any data manipulation and validation

    props.submitForm(props.newPost.form);
  };

    return (
      <div className="addPost">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={form.posterName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              <input
                id="summary"
                type="text"
                placeholder="summary"
                value={form.summary}
                onChange={this.handleChange}
                required
              />
              <input
                id="game"
                type="text"
                placeholder="Game"
                value={form.game}
                onChange={this.handleChange}
                required
              />
              <input
                id="video"
                type="file"
                value={form.video}
                onChange={this.handleChange}
              />
            </label>
            <Button style={styles} type="Submit">
              Submit
            </Button>
          </fieldset>
        </form>
      </div>
    );
}

const styles = {
  border: "3px solid red",
  color: "white",
};

const mapStoreToProps = (store) => {
  return {
    newPost: store.NewPost,
  };
};

const mapActionsToProps = () => {
  return {
    changeForm,
    submitForm,
  };
};

export default connect(mapStoreToProps, mapActionsToProps())(addPost);
