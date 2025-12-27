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
      className="w-[220px]"
    >
      <label className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">Name</span>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="nodrag w-[120px] rounded-md border border-black bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-black/20"
        />
      </label>

      <label className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">Type</span>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="nodrag w-[120px] rounded-md border border-black bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
