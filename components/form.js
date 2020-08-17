import * as React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../components/codeblock";

import { SketchPicker, BlockPicker } from "react-color";

export default function Form(props) {
  // Trigger refresh of render when form is updated ↓

  const [render, startRender] = React.useState(true);

  // Number of dots shown ↓
  const [quantity, setQuantity] = React.useState(5);
  const [quantityFocus, setQuantityFocus] = React.useState(false);

  // Set radius ↓
  const [radius, setRadius] = React.useState(0);
  const [radiusFocus, setRadiusFocus] = React.useState(false);
  // Set margin ↓
  const [margin, setMargin] = React.useState(5);
  const [marginFocus, setMarginFocus] = React.useState(false);
  // Set width ↓
  const [width, setWidth] = React.useState(10);
  const [widthFocus, setWidthFocus] = React.useState(false);
  // Set opacity ↓
  const [opacity, setOpacity] = React.useState(1);
  const [opactiyFocus, setOpacityFocus] = React.useState(false);
  // Set height ↓
  const [height, setHeight] = React.useState(10);
  const [heightFocus, setHeightFocus] = React.useState(false);
  // Set color ↓
  const [color, setColor] = React.useState("#fecf44");
  const [colorFocus, setColorFocus] = React.useState(false);
  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
  // Set rotation ↓
  const [rotation, setRotation] = React.useState(180);
  const [rotationFocus, setRotationFocus] = React.useState(false);
  // Set scale ↓
  const [scaleMin, setScaleMin] = React.useState(0);
  const [scaleMinFocus, setScaleMinFocus] = React.useState(false);
  const [scaleMax, setScaleMax] = React.useState(1);
  const [scaleMaxFocus, setScaleMaxFocus] = React.useState(false);

  // Set duration ↓
  const [duration, setDuration] = React.useState(1);
  // Set delay ↓
  const [delay, setDelay] = React.useState(0.1);
  const [delayFocus, setDelayFocus] = React.useState(undefined);
  // Set ease ↓
  const [ease, setEase] = React.useState("linear");
  console.log(color.toUpperCase());

  let uppercolor = color.toUpperCase();
  // Add # of dots to array to render ↓
  let renderdots = [];
  let snippetelements = "";
  for (let i = 0; i < quantity; i = i + 1) {
    renderdots.push(
      <Dot
        key={i}
        customdelay={delay * i}
        radius={radius}
        margin={margin}
        duration={duration}
        width={width}
        height={height}
        color={color}
        opacity={opacity}
        scaleMin={scaleMin}
        scaleMax={scaleMax}
        ease={ease}
        rotation={rotation}
      ></Dot>
    ),
      (snippetelements += `      <motion.div\r\n                          variants={variants}\r\n                          animate={\"show\"}\r\n                          initial={\"hide\"}\r\n                          transition={transition}\r\n                          style={dot}>\r\n                  <\/motion.div>\r\n            `);
  }

  const pVariants = {
    show: {
      opacity: 1,
      display: "block",
      y: "2px",
    },
    hide: {
      opacity: 1,
      display: "none",
      y: "0px",
    },
  };

  return (
    <motion.div style={{ display: "flex", flexDirection: "column" }}>
      <h1>
        <h1
          style={{
            color: "#FECF44",
            display: "inline-block",
            fontSize: "40px",
          }}
        >
          1.
        </h1>{" "}
        Build your Loader
      </h1>
      <motion.div
        className="editor"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {/* Render loader dots ↓ */}

        {
          <div className="wrap-dotsrenderer">
            <div>
              {renderdots.length == 0 ? (
                <p className="placeholder-text">
                  Define your loader and it’ll show here
                </p>
              ) : render == false ? (
                <p className="placeholder-text">
                  Hit <code>enter</code> (or click outside) to generate{" "}
                </p>
              ) : (
                render && renderdots
              )}
            </div>
          </div>
        }

        <form autocomplete="off">
          <div className="form-style">
            <h2>Styling</h2>
            <div className="wrap-labelinput">
              <label for="quantity">
                Quantity
                <motion.p
                  className="sublabel"
                  variants={pVariants}
                  animate={quantityFocus ? "show" : "hide"}
                  initial={"hide"}
                  transition={{ duration: "0.3" }}
                >
                  Number of dots
                </motion.p>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="0"
                value={quantity}
                onFocus={() => setQuantityFocus(true)}
                onBlur={() => setQuantityFocus(false)}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="quantity">
                Radius{" "}
                <motion.p
                  className="sublabel"
                  variants={pVariants}
                  animate={radiusFocus ? "show" : "hide"}
                  initial={"hide"}
                  transition={{ duration: "0.3" }}
                >
                  Sets rounding of corners
                </motion.p>
              </label>
              <input
                type="number"
                value={radius}
                id="radius"
                name="radius"
                placeholder="0"
                onFocus={() => setRadiusFocus(true)}
                onBlur={() => setRadiusFocus(false)}
                onChange={(e) => setRadius(e.target.value)}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="width">Width </label>
              <input
                placeholder="10"
                value={width}
                type="number"
                id="width"
                name="width"
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="height">Height</label>
              <input
                type="number"
                placeholder="10"
                value={height}
                id="height"
                name="height"
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="opacity">
                Opacity
                <motion.p
                  className="sublabel"
                  variants={pVariants}
                  value={opacity}
                  animate={opactiyFocus ? "show" : "hide"}
                  initial={"hide"}
                  transition={{ duration: "0.3" }}
                >
                  Sets transparancy
                </motion.p>
              </label>
              <input
                placeholder="1"
                type="number"
                value={opacity}
                id="opacity"
                name="opacity"
                onFocus={() => setOpacityFocus(true)}
                onBlur={() => setOpacityFocus(false)}
                onChange={(e) => setOpacity(e.target.value)}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="scalemin">
                Scale Start{" "}
                <motion.p
                  className="sublabel"
                  variants={pVariants}
                  animate={scaleMinFocus ? "show" : "hide"}
                  initial={"hide"}
                  transition={{ duration: "0.3" }}
                >
                  Scale value at start
                </motion.p>
              </label>
              <input
                placeholder="0"
                type="number"
                value={scaleMin}
                id="scalemin"
                name="scalemin"
                onFocus={() => {
                  setScaleMinFocus(true), startRender(false);
                }}
                onBlur={() => {
                  setScaleMinFocus(false), startRender(true);
                }}
                onChange={(e) => setScaleMin(e.target.value)}
                onKeyPress={(event) => {
                  event.key === "Enter"
                    ? document.getElementById("scalemin").blur()
                    : undefined;
                }}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="quantity">
                Scale End{" "}
                <motion.p
                  className="sublabel"
                  variants={pVariants}
                  animate={scaleMaxFocus ? "show" : "hide"}
                  initial={"hide"}
                  transition={{ duration: "0.3" }}
                >
                  Scale value at end
                </motion.p>
              </label>
              <input
                placeholder="1"
                type="number"
                id="scalemax"
                value={scaleMax}
                name="scalemax"
                onFocus={() => {
                  setScaleMaxFocus(true), startRender(false);
                }}
                onBlur={() => {
                  setScaleMaxFocus(false), startRender(true);
                }}
                onChange={(e) => setScaleMax(e.target.value)}
                onKeyPress={(event) => {
                  event.key === "Enter"
                    ? document.getElementById("scalemax").blur()
                    : undefined;
                }}
              />
            </div>
          </div>
          <div
            className="form-style"
            style={{
              marginLeft: "2rem",
              marginTop: "72px",
              marginRight: "4rem",
            }}
          >
            <div className="wrap-labelinput">
              <label for="quantity">Margin</label>
              <input
                placeholder="5"
                type="number"
                value={margin}
                id="margin"
                name="margin"
                onChange={(e) => setMargin(e.target.value)}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="quantity">Rotation</label>
              <input
                placeholder="180"
                type="number"
                id="rotation"
                value={rotation}
                name="rotation"
                onFocus={() => startRender(false)}
                onBlur={() => startRender(true)}
                onChange={(e) => {
                  setRotation(e.target.value);
                }}
                onKeyPress={(event) => {
                  event.key === "Enter"
                    ? document.getElementById("rotation").blur()
                    : undefined;
                }}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="color">Color</label>
              <div
                className="color-trigger"
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
              >
                {color ? (
                  <p className="hex-text" style={{ color: uppercolor }}>
                    {color}
                  </p>
                ) : (
                  <p className="hex-text" style={{ color: "#747474" }}>
                    Choose
                  </p>
                )}
                {colorPickerOpen && (
                  <motion.div style={{ marginTop: "20px" }}>
                    <SketchPicker
                      onChangeComplete={(color) => {
                        setColor(color.hex), startRender(true);
                      }}

                      // triangle="hide"
                    />
                  </motion.div>
                )}
              </div>

              {/* <input
              type="color"
              id="color"
              name="color"
              value="#ff0000"
              // onChange={(e) => setColor(e.target.value)}
            /> */}
            </div>
          </div>

          <div className="form-animation">
            <h2>Animation</h2>
            <div className="wrap-labelinput">
              <label for="duration">Duration</label>
              <input
                placeholder="1"
                type="number"
                id="duration"
                name="duration"
                min="0"
                value={duration}
                max="10"
                onChange={(e) => setDuration(parseInt(e.target.value))}
                onFocus={() => startRender(false)}
                onBlur={() => startRender(true)}
                onKeyPress={(event) => {
                  event.key === "Enter"
                    ? document.getElementById("duration").blur()
                    : undefined;
                }}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="quantity">
                Delay{" "}
                <motion.p
                  className="sublabel"
                  variants={pVariants}
                  animate={delayFocus ? "show" : "hide"}
                  initial={"hide"}
                  transition={{ duration: "0.3" }}
                >
                  Staggered delay per dot
                </motion.p>
              </label>
              <input
                placeholder="0.1"
                type="number"
                id="delay"
                name="delay"
                value={delay}
                min="0"
                max="1"
                onChange={(e) => setDelay(e.target.value)}
                onFocus={() => {
                  startRender(false), setDelayFocus(true);
                }}
                onBlur={() => {
                  startRender(true), setDelayFocus(false);
                }}
                onKeyPress={(event) => {
                  event.key === "Enter"
                    ? document.getElementById("delay").blur()
                    : undefined;
                }}
              />
            </div>
            <div className="wrap-labelinput">
              <label for="ease">Easing</label>
              <select
                style={{ paddingLeft: "10px" }}
                id="ease"
                name="ease"
                onChange={(e) => setEase(e.target.value)}
                onFocus={() => {
                  startRender(false);
                }}
                onBlur={() => {
                  startRender(true);
                }}
                onKeyPress={(event) => {
                  event.key === "Enter"
                    ? document.getElementById("ease").blur()
                    : undefined;
                }}
              >
                <option value="linear">linear</option>
                <option value="easeIn">easeIn</option>
                <option value="easeOut">easeOut</option>
                <option value="easeInOut">easeInOut</option>
                <option value="circIn">circIn</option>
                <option value="circOut">circOut</option>
                <option value="circInOut">circInOut</option>
                <option value="backIn">backIn</option>
                <option value="backOut">backOut</option>
                <option value="backInOut">backInOut</option>
                <option value="anticipate">anticipate</option>
              </select>
            </div>
            {/* <div className="wrap-labelinput">
              <label for="quantity">Ease 🚧</label>
              <motion.div className="wrap-ease">
                <motion.div className="ease-left">Loop</motion.div>
                <motion.div className="ease-right">Yoyo</motion.div>
              </motion.div>
            </div> */}
          </div>
        </form>
      </motion.div>
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
        <p>Yarn</p>
        <div style={{ width: "250px" }}>
          <CodeBlock
            showLineNumbers={false}
            text={`yarn add framer-motion`}
          ></CodeBlock>
        </div>
        <p>NPM</p>
        <div style={{ width: "250px" }}>
          <CodeBlock
            showLineNumbers={false}
            text={`npm i framer-motion`}
          ></CodeBlock>
        </div>
      </motion.div>

      <h1>
        <h1
          style={{
            color: "#F45B99",
            display: "inline-block",
            fontSize: "40px",
          }}
        >
          3.
        </h1>{" "}
        Copy your code
      </h1>
      <motion.div className="snippet">
        <CodeBlock
          showLineNumbers={true}
          text={`import * as React from \"react\";\r\nimport { motion } from \"framer-motion\";\r\n\r\n\/\/ Discover the full API: https:\/\/www.framer.com\/api\/motion\r\n\r\nexport  function Component(props) {\r\n    const dot = {\r\n      width: ${width},\r\n      height: ${height},\r\n      opacity: ${opacity},\r\n      margin: ${margin},\r\n      borderRadius: ${radius},\r\n      display: \"inline-block\",\r\n      background: ${color},\r\n    }\r\n  \r\n  \r\n    const variants = {\r\n      show: {\r\n        scale: ${scaleMax},\r\n        rotate: 0,\r\n      },\r\n      hide: {\r\n        scale: ${scaleMin},\r\n        rotate: ${rotation},\r\n      },\r\n    }\r\n  \r\n    const transition = {\r\n      yoyo: Infinity,\r\n      ease: ${ease},\r\n      duration: ${duration},\r\n      delay: ${delay},\r\n    }\r\n\r\n    return (\r\n            <motion.div>\r\n              ${snippetelements}<\/motion.div>                     \r\n)\r\n      }`}
        ></CodeBlock>
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
