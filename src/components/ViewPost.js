import React from "react";
import { useParams } from "react-router-dom";
import Button from "./common/Button";

const ViewPost = (props) => {
  const { course } = props;
  const { courseId } = useParams();
  return (
    <div>
      <h1>{course.game}</h1>
      <h3>{course.summary}</h3>
      <video src={course.video}></video>
      <Button>Show Comments</Button>
    </div>
  );
};

export default ViewPost;
