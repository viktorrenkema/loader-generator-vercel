import * as React from "react";
import { motion } from "framer-motion";

export function Component(props) {

    // Framer Motion API: https://www.framer.com/api/motion/


    const dot = {
      width: ${width},
      height: ${height},
      scale: ${scale},
      opacity: ${opacity},
      margin: ${margin},
      borderRadius: ${radius},
      display: "inline-block",
      background: ${color},
    }
  
  
    const variants = {
      show: {
        scale: ${scaleMax}
        rotate: 0,
      },
      hide: {
        scale: ${scaleMin}
        rotate: ${rotation}
      },
    }
  
    const transition = {
      yoyo: Infinity,
      ease: "linear",
      duration: ${duration}
      delay: ${delay}
    }

    return (
      <motion.div
        variants={variants}
        animate={"show"}
        initial={"hide"}
        transition={transition}
        style={dot}
      ></motion.div>
    )
  }
