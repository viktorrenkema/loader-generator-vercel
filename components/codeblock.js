import * as React from "react";
import { motion } from "framer-motion";
import {
  CopyBlock,
  dracula,
  atomOneDark,
  monokaiSublime,
  sunburst,
} from "react-code-blocks";

export default function CodeBlock(props) {
  return (
    <CopyBlock
      text={props.text}
      language={"jsx"}
      theme={dracula}
      wrapLines={true}
      showLineNumbers={props.showLineNumbers}
      codeBlock
    />
  );
}
