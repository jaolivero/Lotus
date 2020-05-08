import React, { Component } from "react";

class addPost extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setstate({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.setstate({
      content: "",
    });
  };
  render() {
    return (
      <div className="addPost">
        <form onSumbit={this.handSubmit}>
          <fieldset>
            <label>
              <input type="text" placeholder="Title" />
            </label>
            <label>
              <input
                type="Summary"
                placeholder="Video"
                onChange={this.handleChange}
                value={this.state.content}
              />
              <input type="file" />
            </label>
            <button>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default addPost;
