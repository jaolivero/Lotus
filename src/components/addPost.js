import React, { Component } from "react";
import Button from "./common/Button";
import { connect } from "react-redux";
import { changeForm, submitForm } from "../actions";

class Submission extends Component {
  state = {
    id: 0,
    title: "",
    summary: "",
    game: "",
    video: "",
    likes: 0,
    comments: [],
  };

  handleChange = (e) => {
    this.props.changeForm(e.target.id, e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitForm(this.props.newResource.form);
  };

  render() {
    const { form } = this.props.newPost;

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

export default connect(mapStoreToProps, {
  changeForm,
  submitForm,
})(Submission);
