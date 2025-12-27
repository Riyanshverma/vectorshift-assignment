// outputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace("customOutput-", "output_"));
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      title="Output"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-value`,
          className: "!left-[-6px]"
        },
      ]}
    >
      <label className="flex items-center justify-between">
        {/* <span className="text-sm font-medium text-white">Name</span> */}
        <input
          type="text"
          // value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
          placeholder="Text" // Added this and changed w-[120px] to w-full
        />
      </label>

      <label className="flex items-center justify-between">
        {/* <span className="text-sm font-medium text-white">Type</span> */}
        <select
          // value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
          placeholder="Type" // Added this and changed w-[120px] to w-full
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
