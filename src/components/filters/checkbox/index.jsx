import { Player } from "@lottiefiles/react-lottie-player";
import CheckboxAnimation from './lottieAnimations/CheckboxAnimation.json';
import { createUseStyles } from "react-jss";
import React, { useRef } from "react";

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
    cursor: "pointer",
  },
  hiddenCheckbox: {
    position: "absolute",
    opacity: 0,
    width: 18,
    height: 18,
    margin: 0,
    padding: 0,
  },
});

const Checkbox = React.memo(({ label, id, toggle, checked }) => {
  const classes = useStyles();
  const playerRef = useRef(null);

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
      <Player
        ref={playerRef}
        src={CheckboxAnimation}
        className={classes.lottie}
        autoplay={false}
        loop={false}
        speed={1.5}
      />
      {label}
    </label>
  );
});

export default Checkbox;
