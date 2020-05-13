import React, { Component } from "react";

class Submission extends Component {
  state = {
    title: "",
    summary: "",
    game: "",
    video: "",
    likes: 0,
    comments: [],
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newResource = { ...this.state };
    this.props.addPost(newResource);
    this.setState({
      title: "",
      summary: "",
      game: "",
      video: "",
      likes: 0,
      comments: [],
    });
  };

  render() {
    return (
      <div className="addPost">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              <input
                id="summary"
                type="text"
                placeholder="summary"
                value={this.state.summary}
                onChange={this.handleChange}
                required
              />
              <input
                id="game"
                type="text"
                placeholder="Game"
                value={this.state.game}
                onChange={this.handleChange}
                required
              />
              <input
                id="video"
                type="file"
                value={this.state.video}
                onChange={this.handleChange}
              />
            </label>
            <button type="sumbit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Submission;
