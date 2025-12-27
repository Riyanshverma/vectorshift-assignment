// textNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode
      title="Text"
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
          className: "!left-[-6px]"
        },
      ]}
      className="w-[240px]"
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-gray-700">Text</span>
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="nodrag w-full rounded-md border border-black bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-black/20"
        />
      </label>
    </BaseNode>
  );
};
