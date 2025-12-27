// llmNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      description="This is a LLM."
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          className: "!top-[33%] !left-[-6px]",
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          className: "!top-[66%] !left-[-6px]",
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
          className: "!right-[-6px]"
        },
      ]}
      className="w-[220px]"
    />
  );
};
