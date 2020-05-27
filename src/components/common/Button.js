import React from "react";

const Button = (props) => {
  return (
    <button {...props} style={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;

const styles = {
  button: {
    alignSelf: "center",
    border: "3px solid red",
    backgroundColor: "red",
    color: "white",
    padding: "5px",
    fontSize: "1.5rem",
    cursor: "pointer",
    borderRadius: "7px",
  },
};
