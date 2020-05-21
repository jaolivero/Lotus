import React, { Component } from "react";
import { useParams, withRouter } from "react-router-dom";
import Button from "./common/Button";

class ViewPost extends Component {
  state = {
    showComments: false,
  };

  handleClick = () => {
    this.setState({
      showComments: !this.state.showComments,
    });
  };

  renderComments = (course) => {
    return course.comments.map((comment) => {
      return (
        <div className="box">
          <p>{comment.user}</p>
          <p>{comment.text}</p>
        </div>
      );
    });
  };

  render() {
    //const props = this.props;
    const { course } = this.props;
    // const { courseId } = useParams();
    const { courseId } = this.props.match.params;
    return (
      <div>
        <h1>{course.game}</h1>
        <h3>{course.summary}</h3>
        <video src={course.video}></video>
        <Button onClick={this.handleClick}>
          {this.state.showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {this.state.showComments ? this.renderComments(course) : null}
      </div>
    );
  }
}

export default withRouter(ViewPost);
