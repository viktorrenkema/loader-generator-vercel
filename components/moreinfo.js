import * as React from "react";
import { motion } from "framer-motion";

export default function MoreInfo(props) {
  return (
    <motion.div>
      <h1
        style={{
          marginTop: "4rem",
        }}
      >
        <h1
          style={{
            color: "#FA9477",
            display: "inline-block",
            fontSize: "40px",
          }}
        >
          2.
        </h1>{" "}
        Install Framer Motion
      </h1>
      <motion.div
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          border: "2px solid #312e3a",
          background: "#1d1a23",
        }}
      >
        <p>
          Your Loader runs on{" "}
          <a href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </a>
          , an open-source production-ready animation library for React.
        </p>
        <p>
          To bring your Loader’s code into your React app, all you need to do is
          install the framer-motion{" "}
          <a href="https://www.npmjs.com/package/framer-motion" target="_blank">
            npm package
          </a>{" "}
          from your command line:
        </p>
        <br></br>
      </motion.div>
    </motion.div>
  );
}

export function Dot(props) {
  const dot = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    opacity: props.opacity,
    margin: `${props.margin}px`,
    borderRadius: `${props.radius}px`,
    background: props.color ? `${props.color}` : "#fecf44",
    display: "inline-block",
    transform: "translateZ(42px)",
    perspective: "20px",
  };

  const variants = {
    show: {
      scale: parseFloat(props.scaleMax),
      // background: "#fecf44",
      rotate: 0,
    },
    hide: {
      scale: parseFloat(props.scaleMin),
      // background: "#fca967",
      rotate: parseInt(props.rotation),
    },
  };

  const transition = {
    yoyo: Infinity,
    // flip: Infinity,
    // loop: Infinity,
    ease: props.ease,
    duration: props.duration ? props.duration : 1,
    delay: props.customdelay,
  };

  return (
    <motion.div
      variants={variants}
      animate={"show"}
      initial={"hide"}
      transition={transition}
      style={dot}
    ></motion.div>
  );
}
