import React from "react";
import { useParams } from "react-router-dom";

const ViewPost = (props) => {
  const { course } = props;
  const { courseId } = useParams();
  return <h3>{course.summary}</h3>;
};

export default ViewPost;
