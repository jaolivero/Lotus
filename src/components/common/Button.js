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
    alignself: "center",
  },
};
