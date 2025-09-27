import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
  },
  lottie: {
    width: 18,
    height: 18,
    pointerEvents: "none",
  },
  hiddenCheckbox: {
    position: "absolute",
    opacity: 0,
    width: 16,
    height: 16,
    margin: 0,
    padding: 0,
  },
});


const Checkbox = React.memo(({ label, id, toggle, checked }) => {
  const classes = useStyles();
  return (
    <label htmlFor={id} className={classes.container}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => toggle(id)}
        className={classes.hiddenCheckbox}
        aria-hidden="true"
      />
      {label}
    </label>
  );
});

export default Checkbox;
