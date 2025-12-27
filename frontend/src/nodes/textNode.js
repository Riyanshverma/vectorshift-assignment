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
        {/* <span className="text-sm font-medium text-white">Text</span> */}
        <input
          type="text"
          // value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
          placeholder="Text" // Added this and changed w-[120px] to w-full
        />
      </label>
    </BaseNode>
  );
};
